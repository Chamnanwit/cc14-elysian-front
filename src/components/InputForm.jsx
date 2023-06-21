import createClasses from '../utils/create-classes';

export default function InputForm({
  labelName,
  placeholder,
  value,
  onChange,
  name,
  isInvalid
}) {
  const className = createClasses(
    'block w-full border bg-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 text-lg',
    isInvalid
      ? 'border-red-500 focus:ring-red-300'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
  );
  return (
    <>
      <label htmlFor={name} class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{labelName}</label>
      <input
        id={name}
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}