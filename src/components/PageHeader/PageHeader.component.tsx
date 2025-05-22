interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl md:text-4xl text-gunmetalGrey">
          {title}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};
