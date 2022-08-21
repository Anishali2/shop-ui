import * as React from 'react';
import { View,Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import StyleSheet from '../../assets/css/style';
import { MyContainer } from '../../components/MainComponents';
import { LoginButton } from '../../components/MainComponents/LoginButton';
import { colors } from '../../constraints';

const optionsPerPage = [2, 3, 4];

const ManageMyStore = (props) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[4]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (

    <View style={[StyleSheet.whiteBackground]}>  
    <View style={[StyleSheet.leftPadding,{marginVertical:10}]}>

    <MyContainer title="Manage My Store" />
    </View>
    <DataTable style={{maxHeight:499,minHeight:399}}>
      <DataTable.Header style={{backgroundColor:colors.primaryColor}}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Stock</DataTable.Title>
        <DataTable.Title numeric></DataTable.Title>
      </DataTable.Header>
    {["Shoes","Bag","T-Shirt"].map((_, i) => (

      <DataTable.Row key={i}>
        <DataTable.Cell>{_}</DataTable.Cell>
        <DataTable.Cell numeric>{3 + i}</DataTable.Cell>
        <DataTable.Cell numeric ><Text style={{fontSize:18}}>+</Text></DataTable.Cell>
      </DataTable.Row>
    )
    )}
      
    </DataTable>
    <View style={StyleSheet.flexRowSpaceBetween}>
<View/>
<View style={{width:299}}>

    <LoginButton text={"Done"}/>
</View>
<View/>
    </View>
        </View>

  );
}

export default ManageMyStore;