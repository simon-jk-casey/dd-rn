import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from 'react-native'
import Grid from 'react-native-grid-component'

import styles from './Home.styles.js'
import Topbar from '../../components/Topbar'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  buttonPressed () {
    this.setState({ loading: true })
    setTimeout(() => {
      this.props.getDrinks()
      this.setState({ loading: false })
    }, 3000)
  }

  drinks () {
    return Object.keys(this.props.drinksList).map(key => this.props.drinksList[key])
  }

  _renderItem = (data, i) =>
    <View style={styles.cell} key={i}>
      <Image style={styles.img} source={{ uri: data.strDrinkThumb}}></Image>
      <Text style={styles.caption}>{data.strDrink}</Text>
    </View>

  render () {
    return <View style={styles.container}>
      <Topbar />
      <View style={styles.buttonContainer}>
        {!this.state.loading ? <Button title='Press Me!' onPress={() => this.buttonPressed()} /> : <Text style={styles.caption}>LOADING...</Text>}
      </View>
      <Grid
        style = {styles.list}
        renderItem = {this._renderItem}
        data = {this.drinks()}
        itemsPerRow={2} />
    </View>
  }
}

function mapStateToProps (state) {
  return {
    drinksList: state.drinksList
  }
}

export default connect(mapStateToProps)(Home)
