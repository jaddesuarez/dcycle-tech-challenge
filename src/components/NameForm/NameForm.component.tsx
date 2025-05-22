import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { INameData } from "@/types/name.types";

interface NameFormProps {
  onSearch: UseMutateFunction<INameData, Error, string>;
}

export const NameForm = ({ onSearch }: NameFormProps) => {
  const [nameSearch, setNameSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameSearch) return;
    onSearch(nameSearch);
    setNameSearch("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Search a Name</CardTitle>
        <CardDescription className="hidden md:block">
          Enter a name to get detailed predictions and analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
          <Input
            type="text"
            placeholder="Enter a name"
            value={nameSearch}
            onChange={handleChange}
          />
          <Button type="submit" size="icon">
            <SearchIcon />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
