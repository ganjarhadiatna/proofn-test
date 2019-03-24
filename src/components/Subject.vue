<template>
    <div>
        <div v-for="(item, index) in subject" :key="index">
            <router-link :to="{
                name: 'subject', 
                params: {
                    'id': $route.params.id,
                    'idsubject': item.idsubject,
                }}">

                <div v-if="item.id == $route.params.id">

                    <div v-if="item.idsubject == $route.params.idsubject" class="card-object active">
                        <div class="c-o-col-1">
                            <div class="txt-site txt-10 txt-bold txt-main margin-bottom-5px">
                                {{ item.subject }}
                            </div>
                            <div class="txt-site txt-9 txt-sekunder">
                                {{ item.body }}
                            </div>
                            <div class="txt-site txt-9 txt-sekunder">
                                {{ item.date }}
                            </div>
                        </div>
                        <div class="c-o-col-2">
                            <div class="ttl">
                                {{ item.ttl }}  
                            </div>
                        </div>
                    </div>

                    <div v-else class="card-object">
                        <div class="c-o-col-1">
                            <div class="txt-site txt-10 txt-bold txt-main margin-bottom-5px">
                                {{ item.subject }}
                            </div>
                            <div class="txt-site txt-9 txt-sekunder">
                                {{ item.body }}
                            </div>
                            <div class="txt-site txt-9 txt-sekunder">
                                {{ item.date }}
                            </div>
                        </div>
                        <div class="c-o-col-2">
                            <div class="ttl">
                                {{ item.ttl }}  
                            </div>
                        </div>
                    </div>

                </div>

            </router-link>
		</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            subject: [
                // 1
                {
                    'idsubject': '1',
                    'id': '1',
                    'subject': 'Life Advice Looking Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },
                {
                    'idsubject': '2',
                    'id': '1',
                    'subject': 'Life Advice..',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },
                {
                    'idsubject': '3',
                    'id': '1',
                    'subject': 'Life Advice Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },

                // 2
                {
                    'idsubject': '1',
                    'id': '2',
                    'subject': 'Life Advice Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '2'
                },
                {
                    'idsubject': '2',
                    'id': '2',
                    'subject': 'Life Advice Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },

                // 3
                {
                    'idsubject': '1',
                    'id': '3',
                    'subject': 'Life Advice Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },

                // 4
                {
                    'idsubject': '1',
                    'id': '4',
                    'subject': 'Life Advice Through...',
                    'body': 'Sony laptops are among the',
                    'date': '12:00 AM',
                    'ttl': '1'
                },
            ],
        }
    }
}
</script>
