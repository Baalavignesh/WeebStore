import React, { Component } from "react";
import "./Filter.css";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

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
    ],

    sAnime: [],
    sProduct: [],
  };

  handleInputChange = (event, i, type) => {
    const target = event.target;
    var value = target.value;
    console.log(value);
    console.log(i);
    let selected = [];
    if(type === "product") {
      console.log("product selected")
      selected = [...this.state.sProduct]
    }
    else {
      console.log("anime selected")
      selected = [...this.state.sAnime]
    }

    if (target.checked) {
      selected[i] = value;
    } else {
      selected.splice(i, 1);
    }

    if(type === "product") {
      this.setState({
        sProduct : selected 
      })
    }
    else {
      this.setState({
        sAnime : selected 
      })
    }


    
  };

  doFilter = () => {
    let finalProduct = [...this.state.sProduct]
    let finalAnime = [...this.state.sAnime]
    finalProduct = finalProduct.filter((e) => {
      return e != null;
    })  
    finalAnime = finalAnime.filter((e) => {
      return e != null;
    })
    console.log(finalProduct)
    console.log(finalAnime)
  }


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
      padding: "10px",
      margin: "10px",
      userSelect: "none",
    };

    return (
      <div className="filter-box">
        <div>
          <p className="filter-heading">Product List</p>
          <div style={items}>
            {this.state.productList.map((product, index) => {
              return (
                <ul key = {index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name={product["name"]}
                        onChange={e => {
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
              return <ul key = {index}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name={show["name"]}
                    onChange={e => {
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
          })}
          </div>
        </div>

        <div  className="filter-button">
          <Button variant="contained" color="primary" onClick={this.doFilter}>
            Filter
          </Button>
        </div>
      </div>
    );
  }
}

export default Filter;
