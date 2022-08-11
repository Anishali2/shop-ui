import { StyleSheet } from 'react-native';
import { colors,fonts } from '../../constraints'

export default StyleSheet.create({
    mainBackground:{
        backgroundColor: colors.backgroundColor,
        height: '100%',
        width: '100%',
    },
    whiteBackground:{
        backgroundColor: colors.whiteColor,
        height: '100%',
        width: '100%',
    },
    splashScreen:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:colors.primaryColor,
        width:'100%',
        height:'100%', 
    },
    backgroundImage:{
        width: '100%', 
        height: '100%',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    heading:{
        fontFamily:fonts.Bold,
        fontSize:25,
        textAlign:'center',
        color:colors.headingColor,
        lineHeight:30,
    },
    form_btn:{
        backgroundColor:colors.primaryColor,
        borderRadius:8,
        height:45,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    loginButton:{
        backgroundColor:colors.primaryColor,
        color:"white",
        shadowOpacity:"0.5",
        // borderRadius:12,
        borderColor:colors.primaryColor,
        paddingVertical:6,
        // alignContent:'center',
        // justifyContent:'center',
        // alignItems:'center',
    },
    outlineBtn:{
        backgroundColor:'transparent',
        borderRadius:8,
        borderWidth:1,
        borderColor:colors.borderColor,
        height:45,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    btn_txt:{
        fontFamily:fonts.Regular,
        color:'#fff',
        fontSize:15
    },
    flexRowCenter:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    flexRowSpaceBetween:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    flexSpaceAround:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    subHeading:{
        color:colors.headingColor,
        fontFamily:fonts.Regular,
        fontSize:15
    },
    greySubHeading:{
        color:colors.greyColor,
        fontFamily:fonts.Regular,
        fontSize:14
    },
    transparentBtn:{
        color:colors.primaryColor,
        fontFamily:fonts.SemiBold,
        marginLeft:5
    },
    signupHeader:{
        marginTop:global.statusBarHeight
    },
    signupHeading:{
        fontFamily:fonts.Bold,
        color:colors.headingColor,
        fontSize:30,
        marginTop:15,
    },
    signupSubHeading:{
        fontFamily:fonts.Regular,
        color:colors.headingColor,
        fontSize:16,
        marginTop:5
    },
    leftPadding:{
        paddingTop:5,
        paddingLeft:20,
        paddingRight:20,
    },
    
    label:{
        fontFamily:fonts.Medium,
        color:colors.headingColor,
        fontSize:16,
        marginTop:25,
    },
    phoneNumberView:{
        backgroundColor:colors.whiteColor,
        height:45,
  
    },
    input:{
        borderColor:colors.borderColor,
        borderWidth:1,
        borderRadius:8,
        // justifyContent:'center',

        display:"flex",
        flexDirection:'row',
        alignItems:'center',

        marginTop:6,
        height:52,
        fontFamily:fonts.Regular   
    },

    circleButton:{
        backgroundColor:colors.primaryColor,
        width:40,
        height:40,
        borderRadius:50,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    inputText:{
        paddingLeft:15,
        fontFamily:fonts.Regular,
    },
    headerHeading:{
        fontFamily:fonts.SemiBold,
        alignItems:'center',
        color:colors.headingColor,
        fontSize:20
    },
    checkbox:{
        backgroundColor:colors.primaryColor,
        borderRadius:20,
    },
    positionFixed:{
        marginBottom: 20,
        width: "90%",
        marginLeft:'5%',
        alignContent: "center",
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    flexEnd:{
        justifyContent: "flex-end",
        marginBottom: 20,
        width: "100%",
        alignContent: "center",
    },
    BottomButtonMargin:{
        marginBottom:35
    },
    checkboxView:{
        width: 24, 
        height: 24, 
        borderRadius: 50, 
        backgroundColor: colors.borderColor, 
        marginRight: 5, 
        justifyContent: 'center',
         alignItems: 'center'
    },
    checkboxViewActive:{
        width: 24, 
        height: 24, 
        borderRadius: 50, 
        backgroundColor: colors.primaryColor, 
        marginRight: 5, 
        justifyContent: 'center',
         alignItems: 'center' 
    },
    overlay: {
        backgroundColor:'rgba(6,6,6,0.5)',
        width:'100%',
        height:150,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center'
    },
    foodName:{
        color:colors.headingColor,
        textAlign:'center',
        fontSize:20,
        marginTop:5
    },
    //////Signup Location

    addressCard:{
        borderColor:colors.borderColor,
        borderRadius:8,
        borderWidth:1,
    },
    addressCardPadding:{
        paddingTop:5,
        paddingLeft:15,
        paddingBottom:15,
        paddingRight:15
    },
    line:{
        borderColor:colors.borderColor,
        borderWidth:0.5
    },
    flexRow:{
        flexDirection:'row',
    },
    flexColumn:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    productImage:{
        height:183,
        width:"100%",
        borderRadius:8,
        marginTop:25
    },
    mini_btn:{
        height:'auto',
        paddingVertical:3,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row"
    },
    mini_btn_txt:{
        fontFamily:fonts.Medium,
        color:colors.primaryColor,
        fontSize:15
    },
    dayTxt:{
        // fontSize:20,
        color:colors.white,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'

    },days:{
        alignSelf:'center',
    },
    newlabel:{
        fontFamily:fonts.Medium,
        color:'black'
    },
  
    //////Signup Location

    addressCard:{
        borderColor:colors.borderColor,
        borderRadius:8,
        borderWidth:1,
    },
    addressCardPadding:{
        paddingTop:5,
        paddingLeft:15,
        paddingBottom:15,
        paddingRight:15
    },

    ///////    Home
    homeHeaderTop:{
        width:'100%',
        height:90,
        marginTop:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    headerTxtLocation:{
        fontSize:13,
        fontFamily:fonts.Regular,
        color:'#000'
    },
    textMedium:{
        fontFamily:fonts.Medium,
        color:'#000'
    },
    textBold:{
        fontFamily:fonts.Bold,
        color:'#000'
    },
    flexAlignItem:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerSearchView:{
        width:'90%',
        height:48,
        backgroundColor:'#FFF',
        marginTop:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#DDDDE1',
        alignSelf:'center'
    },
    popularCompMain:{
        width:'100%',
        minHeight:100,
        backgroundColor:'#FFF',
        marginTop:20,
        paddingBottom:25
    },
    textRegular:{
        fontFamily:fonts.Regular,
        color:'#000'
    },
    activeOrderMain:{
        width: '100%', 
        height: 'auto', 
        backgroundColor: colors.whiteColor,
        paddingTop:15,
        marginTop:15,
        paddingBottom:15,
        borderRadius:8
    },
    homeSearchWhiteMain:{
        width:'100%',
        height:'auto',
        backgroundColor:colors.whiteColor,
        paddingTop:15,
        paddingBottom:20,
        marginTop:15
    },
    homeSearchImagePos:{
        width:'100%',
        position:'absolute',
        top:10,
        height:'auto'
    },
    hoImagePosRat:{
        width: 'auto', 
        height: 31,
         backgroundColor: colors.whiteColor, 
         paddingLeft: 10, 
         paddingRight: 10,
         marginLeft:10,
         borderRadius:5
    },

      //product page only
      product:{
        alignContent:"center",
        paddingLeft:10,
        color:colors.headingColor,
        fontSize:13,
        fontFamily:fonts.Medium
    },
    textCenter: {
        textAlign:'center',
        fontSize:18,
        color:colors.greyColor,
        fontFamily:fonts.Regular
    },
    centerHeader: {
        marginBottom:20,
        marginTop:10,
        fontSize:23,
        textAlign:'center',
        color:colors.headingColor,
        fontFamily:fonts.Bold,
    },

    daysActive:{
        backgroundColor: colors.primaryColor,
        width:'auto',
        height:35,
        marginTop:4.5,
        borderRadius:30,
        paddingTop:7,
        marginHorizontal:5,
        paddingHorizontal:20,
        borderColor:colors.whiteColor,borderWidth:1,

    },
    daysUnactive:{
        backgroundColor: colors.whiteColor,
        width:'auto',
        height:35,
        marginTop:4.5,
        borderRadius:30,
        paddingTop:7,
        borderColor:colors.borderColor,
        borderWidth:1,
        marginHorizontal:5,
        paddingHorizontal:20
    },
    mainText:{
        fontFamily:fonts.Medium,
        fontSize:14,
        paddingLeft:3,
        color:colors.headingColor,
        paddingTop:8
    },
    lineCustom:{
        marginTop:30,
        marginBottom:10,
        borderWidth:10,
        borderColor:"#F4F4F4"
    },
    categoryText:{
        alignSelf: "center",
        color: colors.
        headingColor, 
        fontSize:14, 
    }
    , semi_bold:{
        fontFamily:fonts.SemiBold,
        paddingTop:10,
        paddingLeft:10
    },
    total:{
        backgroundColor:colors.whiteColor,
        width:60,
        textAlign:'right'
    },blueTxt:{
        backgroundColor:colors.whiteColor,
        width:60,
        textAlign:'right',
        color:colors.primaryColor,
        fontFamily:fonts.Medium
    },arrowButton:{
        width:55,
        height:55,
        backgroundColor:colors.primaryColor,
        borderRadius:50,
        padding:19,
        marginLeft:'auto',
        marginTop:"auto",
        marginBottom:10
    },
    bottomNavigation: {
        alignItems: 'center', 
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:colors.white,
        paddingLeft:5,
        paddingRight:5,
        paddingTop:4,
        paddingBottom:4,
        borderRadius:5 
    },
    bottomTabsText:{
        fontSize: 14, 
        fontFamily: fonts.Regular, 
        color: colors.primaryColor, 
        marginLeft: 3
    },
    horiBorder:{
        width:'100%',
        height:1,
        backgroundColor:colors.borderColor,
        marginTop:10,
    },    linkText:{
        color:colors.primaryColor,
        fontSize:16,
        marginVertical:20
    },blackBold:{
        color:colors.backgroundColor,
        fontWeight: 'bold',
        fontSize:16
        // fontFamily:Regular

    },
    calender:{
        backgroundColor:colors.primaryColor,
        width:"100%",
        height:'auto',
        color:"red",
        padding:20,
        paddingTop:14
    },listView:{
        color:colors.headingColor,
        fontSize:16,
        paddingTop:12
    },
    header:{
        color:colors.greyColor,
        fontSize:20,
        textAlign:'center',

    },
    inputLabel:{
        color:colors.greyColor,
        fontSize:13,
        paddingTop:12,
        paddingLeft:2
    },
    forgetPass:{
        color:colors.greyColor,
        fontSize:13,
        paddingVertical:12,
        paddingLeft:2,
        textAlign:"right"
    },
     linearGradient: {
    
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


})