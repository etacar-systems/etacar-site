import style from './Select.module.scss';

interface SelectProps {
  label?: string;
  required?: boolean;
  theme?: 'light' | 'dark';
  options: Array<{ label: string; value: string }>;
  name?: string;
}

export const Select = ({ label, required, name, options, theme = 'light' }: SelectProps) => {
  return (
    <div className={style.input_container}>
      <label data-theme={theme === 'dark' ? true : false} className={style.input_label}>
        {label}
      </label>
      <select className={style.select} data-theme={theme === 'dark' ? true : false} name={name} required={required}>
        <option value={undefined} disabled selected>
          -- Select an option --
        </option>
        {options.map(record => (
          <option key={record.value} value={record.value}>
            {record.label}
          </option>
        ))}
      </select>
    </div>
  );
};
