class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
      myStocks: []
    }
  }

  componentWillMount() {
    let url = current_user.portfolio.stocks.join(",")
    debugger
    $.ajax({
      type: 'get',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20* from yahoo.finance.quotes where symbol in (' + url + ')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    })
  }


  render() {
    return(
      <h1>Yo Stocks</h1>
    )
  }
}