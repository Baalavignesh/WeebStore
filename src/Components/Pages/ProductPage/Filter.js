import React, { Component } from "react";
import "./Filter.css";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import axios from "axios";

class Filter extends Component {
  state = {
    productList: [
      { id: "1", name: "Poster" },
      { id: "2", name: "Sticker" },
    ],

    animeName: [
      { id: "1", name: "Attack on Titans" },
      { id: "2", name: "Demon Slayer" },
      { id: "3", name: "Naruto" },
      { id: "4", name: "Jujutsu Kaisen" },
      { id: "5", name: "One Piece" },
      { id: "6", name: "Dragon Ball Z" },
    ],

    sAnime: [],
    sProduct: [],
    sendData: { anime: [], product: [] },
  };

  handleInputChange = (event, i, type) => {
    const target = event.target;
    var value = target.value;
    let selected = [];
    if (type === "product") {
      // console.log("product selected");
      selected = [...this.state.sProduct];
    } else {
      // console.log("anime selected");
      selected = [...this.state.sAnime];
    }

    if (target.checked) {
      selected[i] = value;
    } else {
      selected.splice(i, 1);
    }

    if (type === "product") {
      this.setState({
        sProduct: selected
      })
      // console.log(selected)
    
    } else {
      this.setState({
        sAnime: selected
      })
      // console.log(selected)

    }
  };

  doFilter = () => {
    // Removing all unessesary null values
    let finalProduct = [...this.state.sProduct];
    let finalAnime = [...this.state.sAnime];
    let finalsendData = {...this.state.sendData};
    console.log(finalsendData);

    finalProduct = finalProduct.filter((e) => {
      return e != null;
    });
    finalAnime = finalAnime.filter((e) => {
      return e != null;
    });

    finalsendData.anime = finalAnime;
    finalsendData.product = finalProduct;
    console.log(finalsendData)
    
    this.setState({
      sendData: finalsendData
    }, () => {
      console.log(this.state.sendData);


      // Post Method Here


      axios.post('http://localhost:4000/api/filter', this.state.sendData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    });
  };

  render() {
    const items = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    };

    const list = {
      listStyle: "none",
      cursor: "pointer",
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "5px",
      margin: "5px",
      userSelect: "none",
      width: "80%"
    };

    return (
      <div className="filter-box">
        <div>
          <p className="filter-heading">Product List</p>
          <div style={items}>
            {this.state.productList.map((product, index) => {
              return (
                <ul key={index} className = "filter-list-anime">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name={product["name"]}
                        onChange={(e) => {
                          this.handleInputChange(e, index, "product");
                        }}
                        id={product["id"]}
                        value={product["name"]}
                      />
                    }
                    label={product["name"]}
                    style={list}
                  />
                </ul>
              );
              // return <ul style= {list} value = {product['name']} key = {product['id']} onClick = {selectProduct} ></ul>
            })}
          </div>
        </div>

        <div>
          <p className="filter-heading">Popular Anime</p>
          <div style={items}>
            {this.state.animeName.map((show, index) => {
              return (
                <ul key={index} className = "filter-list-anime">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name={show["name"]}
                        onChange={(e) => {
                          this.handleInputChange(e, index, "anime");
                        }}
                        id={show["id"]}
                        value={show["name"]}
                      />
                    }
                    label={show["name"]}
                    style={list}
                  />
                </ul>
              );
            })}
          </div>
        </div>

        <div className="filter-button">
          <Button variant="contained" color="primary" onClick={this.doFilter}>
            Filter
          </Button>
        </div>
      </div>
    );
  }
}

export default Filter;
