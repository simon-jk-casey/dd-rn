import { Dimensions } from '../../common/react'

export default {
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.width,
    height: Dimensions.height
  },
  buttonContainer: {
    marginTop: 75,
    marginBottom: 20
  },
  cell: {
    height: 200,
    width: 175,
    marginTop: 10,
    marginBottom: 10
  },
  img: {
    height: 150,
    width: 170
  },
  list: {
    flex: 1
  },
  caption: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
    textAlign: 'center'
  }
}
