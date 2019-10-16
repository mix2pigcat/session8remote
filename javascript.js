function remote(code,channel,volume) {
    this.code=code;
    this.channel=channel;
    this.volume=volume;
this.changeChannel=function (tivi,channel1) {
this.channel=channel1;
tivi.channel=this.channel;
}
this.controlVolumeup=function (tivi,volume1) {
this.volume=this.volume+volume1;
tivi.volume=this.volume;
}
this.controlVolumedown=function (tivi,volume2) {
    this.volume=this.volume-volume2;
    tivi.volume=this.volume;
}
}
function tivi(channel,volume,status) {
    this.channel=channel;
    this.volume=volume;
    this.status=status;
    this.nowChannel=function (channel) {
        return this.channel;
    }
    this.nowVolume=function (volume){
        return this.volume;
    }
    this.statusTivi=function (status) {
        if (this.status==true){
            alert('Tivi dang bat')
        }else {
            alert('Tivi dang tat')
        }
    }
}
remote1=new remote('asd',7,10);
tivi1=new tivi(7,10,true);