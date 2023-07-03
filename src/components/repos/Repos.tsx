import { useQuery } from "@tanstack/react-query";
import { getViewerRepos } from "../../state/gql/repos/query/getViewerRepos";
import { RepoCard } from "./RepoCard";

interface ReposProps {

}

export function Repos({}:ReposProps){
const query = useQuery({queryKey: ["viewerRepos"], queryFn: getViewerRepos})
    const repos = query.data&&query.data.viewer.repositories.edges
return (
 <div className='w-full h-full flex flex-wrap  items-center justify-center gap-5 p-2'>
 {repos&&repos.map((repo,i)=>{
 return (
// @ts-expect-error
<RepoCard key={repo.node.id} viewer_repos={repo}/>
 )
 })}
 </div>
);
}


{/* <div key={repo.node.id} className="w-[45%] flex flex-col j items-center border gap-2 p-1 
 shadow-purple-900  shadow rounded flex-grow">
    <div className="w-full flex ">
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">{repo.node.name}</h2>
            <div>{repo.node.nameWithOwner}</div>
        </div>

    </div>

    <div className="w-full flex flex-wrap gap-1 border-t p-1">
        {repo.node.repositoryTopics.nodes.map((topic) => {
            return (
                <div key={topic.id} className="w-fit  rounded-full border shadow-purple-900  shadow  gap-1 text-xs py-[2xp] px-2">
                    {topic.topic.name}</div>
            )
        })}
    </div>

</div> */}
