<template>
  <div class="home-view-container">

    <h1>Adopt a new pet</h1>

     <!-- <h5>Total no of pets: {{ animalsCount }}</h5> -->

    <button @click="toggleForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit"
     v-if="showPetForm" >

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset"  variant="danger">Reset</b-button>
    </b-form>
</div>


</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      showPetForm: false,
      formData:{
        name:'',
        age: 0,
        species: null
      }
    }
  },
  computed:{
    ...mapGetters([
      'animalsCount'
    ])
  },
  methods:{
    ...mapActions([
      'addPet'
    ]),
    toggleForm(){
      this.showPetForm = !this.showPetForm
    },
    handleSubmit(){
      const { species, age , name} = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      this.formData = {
        name:'',
        age: 0,
        species: null
      }

    },
    // Reset(){
    //    this.formData = {
    //     name:'',
    //     age: 0,
    //     species: ['']
    //   }
    // }
  }
}
</script>
