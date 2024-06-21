export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Inner LayOut</h1>
      {children}
    </div>
  );
}
