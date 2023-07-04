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




