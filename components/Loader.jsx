import { Oval } from 'react-loader-spinner';

const FallBackLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Oval
        height={100}
        width={100}
        color="#1976d2"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1976d2"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export { FallBackLoader };
