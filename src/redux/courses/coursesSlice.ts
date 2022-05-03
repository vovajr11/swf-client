import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourse } from '@interfaces/course.interface';
import notificationTypes from '@components/Notification/notificationTypes';
import {
  createCourse,
  createModule,
  createChapter,
  getDetailsOfAllCourses,
  getCourseForAdmin,
} from './coursesAPI';

const initialState = { coursesForAdmin: [], coursesForStudents: [] } as ICourse;

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(createCourse.fulfilled, (state, { payload }) => {
      state.coursesForAdmin.push(payload);

      notificationTypes.notificationSuccess('Курс створено успішно!');
    });

    builder.addCase(createModule.fulfilled, (state, { payload }) => {
      const { courseId, resData } = payload;

      state.coursesForAdmin.map(item =>
        item.id === courseId ? item.modules.push(resData) : item,
      );

      notificationTypes.notificationSuccess('Модуль створено успішно!');
    });

    builder.addCase(createChapter.fulfilled, (state, { payload }) => {
      const { moduleId, resData } = payload;

      state.coursesForAdmin
        .flatMap(({ modules }) => modules)
        .map(module =>
          module._id === moduleId ? module.chapters.push(resData) : module,
        );

      notificationTypes.notificationSuccess('Тему створено успішно!');
    });

    builder.addCase(createChapter.rejected, (state, { payload }) => {
      notificationTypes.notificationError(`${payload}`);
    });

    builder.addCase(getDetailsOfAllCourses.fulfilled, (state, { payload }) => {
      state.coursesForStudents = payload.courses;
    });

    builder.addCase(getCourseForAdmin.fulfilled, (state, { payload }) => {
      state.coursesForAdmin = payload.courses;
    });
  },
});
