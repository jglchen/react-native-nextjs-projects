import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    saveAreaViewContainer: {
       flex: 1,
    },
    viewContainer: { flex: 1, width: '100%', paddingBottom: 20 },
    scrollViewContainer: {
       paddingVertical: "3%",
       paddingHorizontal: "2%",
    },
    verticalView: {
       flexDirection: 'column',
       justifyContent: 'flex-start',
       paddingHorizontal: "2%",
       alignItems: 'center'  
    },
    horizontalView: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },
    horizontalListView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingBottom: 10        
    },
    paragraphView: {
        width: "100%",
        paddingBottom: 10        
    },
    listButtonView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingBottom: 10
    },
    listImageView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        paddingVertical: 10
    },
    listItemView: {
        width: "100%",
        paddingBottom: 20        
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold'
    }, 
    itemText: {
        fontSize: 20,
        lineHeight: 24,
        color: 'gray',
    }, 
    paragraphText: {
        fontSize: 20,
        lineHeight: 28
    },
    linkText: {
        color: '#0084ff', 
        fontSize: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
});


