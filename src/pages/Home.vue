<template>
    <div class="home">
        <Swiper></Swiper>
        <List :list="list" :dataName="'home'"></List>
    </div>
</template>


<script>
    import Swiper from '../components/Swiper';
    import List from '../components/List';
    export default {
        data(){
            return {
                list:[]
            }
        },
        components:{
            Swiper,List
        },
        mounted(){
            axios(
                'http://rap2api.taobao.org/app/mock/223502/cqc'
            ).then(
                res=> {
                    console.log(res.data.cqc)
                    this.list=res.data.cqc
                }
            )
        }
    }
</script>

