class PizzaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: [],
    };
  }

  componentDidMount() {
    axios.get('/pizzaData.json')
      .then((response) => {
        this.setState({
          pizzaList: response.data,
        });
      });
  }

  render() {
    const { pizzaList, } = this.state,
      pizzas = pizzaList.length ? (
        pizzaList.map(item => (
          <li className="flex-33 pizza-list-item" key={item.id}>
            <div className="card">
              <div className="card-image">
                <img src={item.image_url} alt={item.name} />
                <button type="button" className="btn-floating halfway-fab waves-effect waves-light red d-flex justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                    <path d="M455 212.5H242.5V0h-30v212.5H0v30h212.5V455h30V242.5H455z" />
                  </svg>
                </button>
              </div>
              <div className="card-content">
                <span className="card-title">{item.name}</span>
                <div className="d-flex">
                  <span className="fw-500">Size:</span>
                  <span className="left-10">{item.size}</span>
                </div>
                <div className="d-flex">
                  <span className="fw-500">Price:</span>
                  <span className="left-10">{item.price}</span>
                </div>
                <div className="d-flex">
                  <span className="fw-500">Category:</span>
                  <span className="left-10 text-capitalize">{item.category}</span>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>No Pizzas Available</li>
      );

    return (
      <div>
        <h4 className="center">Pizzas</h4>
        <ul className="d-flex container flex-wrap pizza-list">
          {pizzas}
        </ul>
      </div>
    );
  }
}

export default PizzaHome;
