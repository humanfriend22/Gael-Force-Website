import fs from 'fs'
import path from 'path'
import { TeamMeta } from "@/lib/definitions"

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'content', 'teams')

export const getTeamBySlug = async (slug: string): Promise<{ content: TeamMeta }> => {
  const filePath = path.join(rootDirectory, `${slug}.JSON`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const content = JSON.parse(fileContent) as TeamMeta

  return { content }
}

export const getAllTeamMeta = async (): Promise<TeamMeta[]> => {
  const files = fs.readdirSync(rootDirectory)

  let teams: TeamMeta[] = []

  for (const file of files) {
    const { content } = await getTeamBySlug(file)
    teams.push(content)
  }

  return teams
}
