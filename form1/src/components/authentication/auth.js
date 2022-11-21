function ProtectedRoute({ children }) {
  if (true) return children;
  else return <>not found </>;
}

export default ProtectedRoute;

// JSON.parse(localStorage.getItem("flag")) ==
