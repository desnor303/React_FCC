class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper value = {2}/>
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) =>  {
  return(
    <div>
    <p>{props.name}</p>
    </div>
  )
}
// defind default Props
Camper.defaultProps = {
  name: "CamperBot",
}

Camper.propTypes = {name: PropTypes.string.isRequired}