<template>
    <div>
        <div v-for="(item, index) in $dataBase[$route.params.id].subject" :key="index">

            <router-link :to="{
                name: 'subject', 
                params: {
                    'id': $route.params.id,
                    'idsubject': item.idsubject,
                }}">

                <div>

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
