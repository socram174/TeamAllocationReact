const Header = ({selectedTeam,teamMemberCount}) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Allocation</h1>
          <h2>Team: {selectedTeam} has {teamMemberCount} {teamMemberCount === 1?'member':'members'}</h2>
        </div>
      </div>
    </header>
  )
}

export default Header