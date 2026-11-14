import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F8FC', //alice blue
    },

    scrollContainer: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },

    header: {
        backgroundColor: '#103B5C', //dark navy blue
        paddingTop: 30,
        paddingBottom: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    headerSubtitle: {
        fontSize: 13,
        color: '#B8E4F2',
        marginTop: 5,
        letterSpacing: 2,
    },

    boatCard: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 22,
        elevation: 4,
    },

    boatImage: {
        borderRadius: 20,
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },

    boatContent: {
        padding: 16,
    },

    boatTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    boatIcon: {
        marginRight: 10,
    },

    boatName: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#103B5C',
    },

    boatDescription: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 21,
    },

    divider: {
        height: 3,
        backgroundColor: '#E8F6FB',
        borderRadius: 10,
        marginTop: 15,
    },
});
export default styles;
