type MobileMenuButtonProps = {
  onClose: () => void;
};
const MobileMenuButton = ({ onClose }: MobileMenuButtonProps) => {
  return (
    <svg
      className="mt-2 mr-5 ml-4 cursor-pointer lg:hidden"
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClose}
    >
      <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" />
    </svg>
  );
};

export default MobileMenuButton;
