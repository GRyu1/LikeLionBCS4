const CreateTodo = () => {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" />
        <input type="submit" value="생성" />
      </form>
    );
  };
  
  export default CreateTodo;