function Phone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M7 4h10v14H7z" opacity=".5 size=2"></path>
      <path
        fill="rgb(63, 61, 84)"
        d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3-3H7V4h10z"
      ></path>
    </svg>
  );
}
export default Phone;
