import { createSlice } from '@reduxjs/toolkit';
import { ICourse } from '@interfaces/course.interface'
import { createCourse, createModule, createChapter, getDetailsOfAllCourses, getCourseForAdmin } from './coursesAPI';

const initialState = { coursesForAdmin: [], coursesForStudents: [] } as ICourse;

export const coursesSlice = createSlice({
    name: 'courses',
    initialState: initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(createCourse.fulfilled, (state, { payload }) => {
                state.coursesForAdmin.push(payload)
            });

        builder
            .addCase(createModule.fulfilled, (state, { payload }) => {
                const { courseId, resData } = payload;

                state.coursesForAdmin.map((item) =>
                    item.id === courseId ? item.modules.push(resData) : item,
                );
            });

        builder
            .addCase(createChapter.fulfilled, (state, { payload }) => {
                const { moduleId, resData } = payload;

                state.coursesForAdmin
                    .flatMap(({ modules }) => modules)
                    .map(module =>
                        module._id === moduleId
                            ? module.chapters.push(resData)
                            : module,
                    );
            });

        builder
            .addCase(getDetailsOfAllCourses.fulfilled, (state, { payload }) => {
                state.coursesForStudents = payload.courses;
            })

        builder
            .addCase(getCourseForAdmin.fulfilled, (state, { payload }) => {
                state.coursesForAdmin = payload.courses;
            })
    },
})