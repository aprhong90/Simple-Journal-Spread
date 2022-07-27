import "./CreatePage.css";
import StickersForm from "./StickersForm";
import TextEdittingForm from "./TextEdittingForm";

const CreatePage = () => {
  return (
    <div className="CreatePage">
      <div>Create</div>
      <TextEdittingForm />
      <StickersForm />
    </div>
  );
};

export default CreatePage;
