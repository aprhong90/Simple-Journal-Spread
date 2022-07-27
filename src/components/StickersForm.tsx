import "./StickersForm.css";

const StickersForm = () => {
  return (
    <form className="StickersForm">
      <div>
        <div>title</div>
        <div>content</div>
      </div>
      <div>stickerbox</div>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  );
};

export default StickersForm;
