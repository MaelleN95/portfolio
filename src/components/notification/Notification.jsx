function Notification({ type, children }) {
  return (
    <div className={`notification ${type}`} tabIndex={1}>
      {children}
    </div>
  );
}
export default Notification;
