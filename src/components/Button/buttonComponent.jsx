

export const But = (props) => {


  return (
    <>
        <button className="btn btn-primary" onClick={props.funcion}>
          {props.texto}
        </button>
    </>
  )
};