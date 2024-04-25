import { Spin } from 'antd';
import { useAppSelector } from 'store';
import { selectAppLoading } from 'store/appSlice';

function AppLoading() {
  const isLoading = useAppSelector(selectAppLoading);

  return (
    <>
      {isLoading && (
        <div className="fixed z-[1001] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#000000b3]">
          <div className="flex flex-col items-center">
            <Spin size="large" />
          </div>
        </div>
      )}
    </>
  );
}

export default AppLoading;
