export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col max-w-screen-xl pb-10 ml-35 mr-5 md:mr-10 md:ml-70 my-10 gap-10">
      {children}
    </div>
  );
};
