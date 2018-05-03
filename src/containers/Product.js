import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../../redux/actions/ProductActions';

export class Product extends React.Component {
    constructor(props) {
        super(props);
        this.onPressLearnMore = this.handelOnPressLearnMore.bind(this);
    }
    handelOnPressLearnMore(event) {
        this.props.actions.UpdateProduct({id: this.props.Product.id + 1});
    }
    render() {
        console.log('anir here');
        return (
        <View style={styles.container}>
            <Text>Anirban Saha</Text>
            <Text>{this.props.Product.id}</Text>
            <Text>Shake your phone to open the developer menu.</Text>
           
            <Button
                onPress={this.onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button" /> 
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  function mapStateToProps(state, ownProps) {
    return {
        Product: state.Product
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch,
        actions: bindActionCreators(Object.assign({}, ProductActions), dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);