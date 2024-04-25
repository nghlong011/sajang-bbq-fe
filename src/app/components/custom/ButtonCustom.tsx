import { Button } from 'antd';
import { DynamicKeyObject } from 'model';

interface IProps extends DynamicKeyObject {
  text: string;
  clasName?: string;
}

const ButtonCustom = (props: IProps) => {
  const { text, className, ...nest } = props;

  return (
    <Button
      className={`bg-primary text-white hover:bg-primary-hover hover:!text-white text-[15px] flex items-center p-5 ${className}`}
      {...nest}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
