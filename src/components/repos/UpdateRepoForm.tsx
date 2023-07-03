import React, { useState } from "react";
import { Button, FormControlLabel, Checkbox, Stack } from "@mui/material";
import { UpdateRepositoryInput, updateRepository } from "../../state/gql/repos/mutation/updateRepo";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Textarea } from "@mui/joy";
import { RepositoriesNode } from "../../state/gql/repos/types";
import { useMutation } from "@tanstack/react-query";

interface UpdateRepoFormProps{
    input:RepositoriesNode
}
export function UpdateRepoForm({input}:UpdateRepoFormProps){

  const [formData, setFormData] = useState<UpdateRepositoryInput>({
    name:input.name,
    description:input.description,
    repositoryId:input.id,
    homepageUrl:input.homepageUrl,
    hasIssuesEnabled:input.hasIssuesEnabled,
    hasWikiEnabled:input.hasWikiEnabled,
    template:input.isTemplate,
  });
const mutation = useMutation({
  mutationFn: (variables:UpdateRepositoryInput) => updateRepository(variables),
  onSuccess(data, variables, context) {
    console.log("succesfully updated repository", data);
    console.log("data", data);
    console.log("variables", variables);
    console.log("context", context);
  },
  onError(error, variables, context) {
    console.log("error updating repository", error);
    console.log("variables", variables);
    console.log("context", context);
  },
});
  const updateRepoBooleans = [
    "hasIssuesEnabled",
    "hasWikiEnabled",
    "template",
  ] as const;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // @ts-expect-error
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.repositoryId&&formData.repositoryId!==""){
      mutation.mutate(formData);
    }else{
      throw new Error("repository id required");
    }

    // Handle form submission logic here
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          placeholder="Repository name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          placeholder="Repository description"
          value={formData.description}
          onChange={handleChange}
          sx={{
            height: 100,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Homwpage Url</FormLabel>
        <Input name="homepageUrl" value={formData.homepageUrl} onChange={handleChange} type="url" />
      </FormControl>

      <Stack direction="row" spacing={2} flexWrap={"wrap"}>
        {updateRepoBooleans.map((boolean) => (
          <FormControlLabel
           className="w-fit"
            key={boolean}
            control={
              <Checkbox name={boolean} checked={formData[boolean]} onChange={handleChange} />
            }
            label={boolean}
          />
        ))}
      </Stack>

      <Button type="submit" variant="contained" color="secondary">
        update
      </Button>
    </form>
  );
}
