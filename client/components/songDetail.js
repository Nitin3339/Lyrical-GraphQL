import React,{Component} from "react";
import {graphql} from 'react-apollo';
import { Link } from "react-router";
import getSong from '../Queries/getSong'
import LyricsCreate from "./LyricsCreate";
import LyricList from "./LyricList";

class SongDetail extends Component{
    render(){

        const {song}=this.props.data;
        if(!song){
            return <div>Loading...</div>
        }
        return(
            
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricsCreate songId={this.props.params.id}/>
            </div>
        )

    }
}
export default graphql(getSong,{options:(props)=>{return{variables:{id:props.params.id}}}})(SongDetail)