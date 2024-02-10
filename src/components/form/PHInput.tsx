import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type TinputProps = {
  type: string;
  name: string;
  label?: string;
};
const PHInput = ({ name, type, label }: TinputProps) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
