import { Pagination, PaginationProps } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { actionUpdateAppPagination, selectAppPagination } from 'store/appSlice';
import { loading } from 'utils/app';

interface IProps extends PaginationProps {
  onChangeDataTable: (data: DynamicKeyObject) => void;
  apiPath: string;
  align?: 'center' | 'right';
  params?: DynamicKeyObject;
}

function AppPagination(props: Readonly<IProps>) {
  const { onChangeDataTable, apiPath, align, params = {}, ...nest } = props;
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectAppPagination);
  const total = useRef<number>(0);

  const handleChangePage = (current: number, size: number) => {
    dispatch(actionUpdateAppPagination({ current, size }));
  };

  useEffect(() => {
    loading.on();
    processGetQuery(apiPath, { ...page, ...params }).then((data) => {
      total.current = data.count ?? 0;
      onChangeDataTable(data);
    });
  }, [page]);

  return (
    <div className={align === 'center' ? 'flex justify-center w-full' : ''}>
      <Pagination
        total={total.current}
        current={page.current}
        pageSize={page.size}
        onChange={handleChangePage}
        {...nest}
      />
    </div>
  );
}

export default AppPagination;
