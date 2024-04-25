import BlogForm from 'app/page/Admin/Blog/Form';
import BranchForm from 'app/page/Admin/Branch/Form';
import DishForm from 'app/page/Admin/Dish/Form';
import UserForm from 'app/page/Admin/User/Form';
import { IModalForm } from 'store/appSlice';

export type IModalConfigKey = 'user' | 'branch' | 'dish' | 'blog';

export const modalFormConfig: { [key in IModalConfigKey]: IModalForm } = {
  user: {
    title: 'Người dùng',
    apiPath: '/user',
    formElement: UserForm,
    isFormData: true,
  },
  branch: {
    title: 'Chi nhánh',
    apiPath: '/branch',
    formElement: BranchForm,
    isFormData: true,
  },
  dish: {
    title: 'Món ăn',
    apiPath: '/dish',
    formElement: DishForm,
    isFormData: false,
  },
  blog: {
    title: 'Bài đăng',
    apiPath: '/blog',
    formElement: BlogForm,
    isFormData: true,
  },
};
