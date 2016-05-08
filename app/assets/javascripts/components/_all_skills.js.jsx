var AllSkills = React.createClass({
  getInitialState() {
      return {
        skills: []
      };
  },
  compoundDidMount() {
 $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });  },
  render() {
    var skills = this.state.skills.map((skill) => {
      return (
        <div>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level}</p>
          <p>{skill.details}</p>
        </div>
      )

    return(
      <div>
        {skills}
      </div>
    )
  }
});