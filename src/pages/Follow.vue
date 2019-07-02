<template>
    <div class="follow">
        <List :list="list" dataName="follow"></List>
    </div>
</template>

<script>
import List from '../components/List'
export default {
    name:'follow',
    components:{
        List
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        axios({
            url:'/api/follow',
            params:{_page:1,_limit:6}
        }).then(
            res=>this.list=res.data.data
        )
    }
}
</script>

<style scoped>
.follow{
    padding-top:.7rem;
}
</style>

