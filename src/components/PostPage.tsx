import "./PostPage.css";
import StickersForm from "./StickersForm";
import TextEdittingForm from "./TextEdittingForm";

//TODO: make prop for the value.
//CREATE OR EDIT
const PostPage = () => {
  return (
    <div className="PostPage">
      <div>Create</div>
      <div>Edit</div>
      <TextEdittingForm />
      <StickersForm />
    </div>
  );
};

export default PostPage;
