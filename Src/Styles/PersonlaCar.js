const PersonalCard = {
    Dot: { backgroundColor: '#16f1bb', width: 10, height: 10, borderRadius: 10, alignSelf: 'center' },
    mainContainer: { marginHorizontal: 10, paddingBottom: 20, borderRadius: 20, backgroundColor: 'white', marginVertical: 10 },
    firstRow: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25, marginLeft: 20 },
    Icon: { backgroundColor: '#634791', width: 40, height: 40, borderRadius: 40, textAlign: 'center', textAlignVertical: 'center' },
    message: { paddingTop: 5, position: 'absolute', top: 60, left: -10 },
    location: { alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#21e7b6', marginTop: 10, height: 40 },
    thirdRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginLeft: 100 }
}
export default PersonalCard;