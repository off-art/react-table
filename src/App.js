import React, { Component } from "react";
import "./App.css";
import {
  Loader,
  Table,
  RowView,
  ModeSelector,
  TableSearch,
} from "./components";
import chunk from "lodash/chunk";
import orderBy from "lodash/orderBy";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: "asc", //desc
    sortField: "id",
    row: null,
    currentPage: 0,
    search: "",
  };

  async fetchDate(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoading: false,
      data: orderBy(data, this.state.sortField, this.state.sort),
    });
  }

  onSort = (sortField) => {
    const clonedData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = orderBy(clonedData, sortField, sort);
    this.setState({
      data,
      sort,
      sortField,
    });
  };
  onRowSelect = (row) => {
    this.setState({
      row,
    });
  };
  modeSelectHendler = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true,
    });
    this.fetchDate(url);
  };
  pageChangeHandler = ({ selected }) => {
    this.setState({
      currentPage: selected,
    });
  };
  searchHendler = (search) => {
      this.setState({
        search,
        currentPage: 0,
      });
  };
  getFilteredDate() {
    const { data, search } = this.state;
    if (!search) {
      return data;
    }
    // eslint-disable-next-line array-callback-return
    return data.filter((item) => { 
         return (item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
          item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
          item["email" ].toLowerCase().includes(search.toLowerCase()) )
          
    });
  }

  render() {
    const pageSize = 50;
    if (!this.state.isModeSelected) {
      return (
        <div>
          <ModeSelector onSelect={this.modeSelectHendler} />
        </div>
      );
    }
    const filteredDate = this.getFilteredDate();
    const pageCount = Math.ceil(filteredDate.length / pageSize)
    const displayData = chunk(filteredDate, pageSize)[this.state.currentPage];
    return (
      <div className="App">
        <header className="App-header">
          <h3 style={{ textAlign: "center" }}>Выбор города</h3>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <>
              <TableSearch onSearch={this.searchHendler} />
              <Table
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
            </>
          )}
          {this.state.data.length > pageSize ? (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.pageChangeHandler}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              forcePage={this.state.currentPage}
            />
          ) : null}
          {this.state.row ? <RowView person={this.state.row} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
