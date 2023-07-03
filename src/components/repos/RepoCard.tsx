import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { RepositoriesEdge } from "../../state/gql/repos/types";
import React from "react";
import Chip from "@mui/joy/Chip";


interface RepoCard {
  viewer_repos: RepositoriesEdge;
}

export function RepoCard({ viewer_repos }: RepoCard) {
const [repo, setRepos] = React.useState(viewer_repos.node);
//  console.log("repo === ",repo.repositoryTopics);
  return (
    <Card
      sx={{
        boxShadow: 10,
        borderRadius: 5,
        ":hover": {
          boxShadow: "1px 1px 1px 1px purple",
          color: "black",
        },
      }}
      className="md:h-[350px] w-full md:w-[45%] lg:w-[30%] flex flex-col  gap-2 "
      variant="elevation">
      <div className="w-full flex flex-wrap lg:flex-row  justify-between p-3 gap-2">
        <div className="w-full flex justify-between line-clamp-2">
          <div className="w-[90%] flex flex-col justify-between line-clamp-2">
            <h1 className="text-xl font-bold line-clamp-1">{repo.name}</h1>
            <h3 className="line-clamp-1">{repo.nameWithOwner}</h3>
          </div>

          {/* <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton> */}
        </div>

        <CardMedia
          component="img"
          height={50}
          className="w-full md:max-h-[150px] shadow rounded"
          image={repo.openGraphImageUrl}
          alt={repo.nameWithOwner}
          width={50}
        />
      </div>

      <CardContent style={{ padding: "2px" }}>
        <h4 className="text-sm  line-clamp-1">{repo.description}</h4>
      </CardContent>

      <div className="w-full flex flex-wrap gap-1 border-t p-2 md:max-h-12 scrollbar-thin">
        {repo.repositoryTopics.nodes.map((topic) => {
          return (
            <Chip key={topic.id} onClick={function () {}} variant="outlined"
          size="sm"
            >
              {topic.topic.name}
            </Chip>
          );
        })}
      </div>
    </Card>
  );
}
