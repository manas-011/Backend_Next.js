export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="p-4 border-p text-center">20% off for next few days..</div>

      {children}
    </>
  );
}
