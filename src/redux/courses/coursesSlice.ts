import { createSlice } from '@reduxjs/toolkit';
import { ICourse } from '@interfaces/course.interface'
import { createCourse, createModule, createChapter, getDetailsOfAllCourses } from './coursesAPI';

const initialState = { items: [] } as ICourse;

export const coursesSlice = createSlice({
    name: 'courses',
    initialState: initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(createCourse.fulfilled, (state, { payload }) => {
                state.items.push(payload)
            });

        builder
            .addCase(createModule.fulfilled, (state, { payload }) => {
                const { courseId, resData } = payload;

                state.items.map((item) =>
                    item.id === courseId ? item.modules.push(resData) : item,
                );
            });

        builder
            .addCase(createChapter.fulfilled, (state, { payload }) => {
                const { moduleId, resData } = payload;

                console.log(moduleId, 'moduleId');
                console.log(resData, 'resData');


                state.items
                    .flatMap(({ modules }) => modules)
                    .map(module =>
                        module._id === moduleId
                            ? module.chapters.push(resData)
                            : module,
                    );
            });

        builder
            .addCase(getDetailsOfAllCourses.fulfilled, (state, { payload }) => {
                state.items = payload.courses;
            })
    },
})