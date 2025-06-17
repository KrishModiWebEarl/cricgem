"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Facebook, Instagram, Play, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface TableDataItem {
  type: string
  point: string
}

interface PointSection {
  table: TableDataItem[]
  notes: string[]
}

interface PointSectionData {
  [key: string]: PointSection
}

export default function Component() {
  const formatTabs = ["T20", "ODI", "Test", "T10", "The Hundred"]
  const pointSections = [
    "Batting Points",
    "Bowling Points",
    "Fielding poins",
    "Strike Rate",
    "Economy Rate",
    "Other Terms & Conditions",
    "Impact and x - factor substitutes player rules",
    "For Warm - Up Matches",
    "LIVE Fantasy Terms & Conditions",
    "The Hundred Cricket T&C",
  ]

  const [openSection, setOpenSection] = useState<string | null>(null)
  const [selectedFormat, setSelectedFormat] = useState<string>(formatTabs[0])

  const sectionData: PointSectionData = {
    "Batting Points": {
      table: [
        { type: "Run", point: "+1" },
        { type: "Playing 11", point: "+2" },
        { type: "Boundary Bonus", point: "+1" },
        { type: "Six Bonus", point: "+2" },
        { type: "30 Runs Bonus", point: "+2" },
        { type: "Half-century Bonus", point: "+6" },
        { type: "Century Bonus", point: "+14" },
        { type: "150-run Bonus", point: "NA" },
        { type: "200-run Bonus", point: "NA" },
        { type: "Dismissal For A Duck (Wicket-keeper, All-rounder & Batsman)", point: "-2" },
      ],
      notes: [],
    },
    "Bowling Points": {
      table: [
        { type: "Wicket (excluding run out)", point: "+25" },
        { type: "2-wicket haul bonus", point: "NA" },
        { type: "3-wicket haul bonus", point: "+4" },
        { type: "4-wicket haul bonus", point: "+8" },
        { type: "5-wicket haul bonus", point: "+14" },
        { type: "10-wicket haul bonus", point: "NA" },
        { type: "Maiden over", point: "+10" },
        { type: "Bonus (LBW/Bowled)", point: "+5" },
      ],
      notes: [
        "No fantasy points will be awarded for a maiden over bowled in The Hundred Cricket Tournament.",
        "Wicket (excluding run-out) includes stumped, caught out, and hit wicket. In case of a Run-out, the points for the wicket are given to the person who throws the ball. However, in a case where the batsman is stumped the points are awarded to the wicket keeper and the bowler is awarded points for a wicket.",
        "Bonus points for 10-wicket haul will be awarded at the end of the 2nd innings of the match. The points for 10-wicket haul shall only be awarded for Test matches.",
        "Any player qualifying for 10-wicket haul along with any other haul like 2-wicket, 3-wicket, 4-wicket or 5-wicket, shall get bonus point for the 10-wicket haul as well as the other qualifying haul.",
      ],
    },
    "Fielding poins": {
      table: [
        { type: "Catch", point: "+1" },
        { type: "Stumping", point: "+2" },
        { type: "Runout (Direct)", point: "+1" },
        { type: "Runout (Not a direct hit)", point: "+2" },
        { type: "3 catch haul bonus", point: "+2" },
        { type: "4 catch haul bonus", point: "+6" },
        { type: "5 catch haul bonus", point: "+14" },
      ],
      notes: [
        "Any fielder catching three or more catches in an inning shall be awarded a catch-haul bonus. The bonus shall only be applicable in case the total number of catches by a player in a particular inning qualify for the bonus.",
        "The points for Runout (not a direct hit) will be split equally among the last 2 players involved.",
      ],
    },
    "Strike Rate": {
      table: [
        { type: "Applicable for players batting minimum balls", point: "10 Balls" },
        { type: "Between 120-140 runs per 100 balls", point: "+2" },
        { type: "Between 140.01-160 runs per 100 balls", point: "+4" },
        { type: "Above 160 runs per 100 balls", point: "+6" },
        { type: "Between 60-70 runs per 100 balls", point: "-1" },
        { type: "Between 50-59.9 runs per 100 balls", point: "-2" },
        { type: "Below 50 runs per 100 balls", point: "-3" },
      ],
      notes: [
        "The positive points for Strike Rate will be awarded to all the players and in case of deductions, the points for negative strike rate will be deducted for all players except bowlers.",
      ],
    },
    "Economy Rate": {
      table: [
        { type: "Applicable for players bowling minimum overs", point: "2 overs" },
        { type: "Below 4 runs per over", point: "+6" },
        { type: "Between 4-4.99 runs per over", point: "+4" },
        { type: "Between 5-6 runs per over", point: "+2" },
        { type: "Between 9-10 runs per over", point: "-2" },
        { type: "Between 10.01-11 runs per over", point: "-4" },
        { type: "Above 11 runs per over", point: "-6" },
      ],
      notes: [
        "The points for Economy Rate will be awarded to all the players but in case of deductions, the points for negative economy rate will be deducted only for all- rounders and bowlers.",
        "The economy rate in case of T20 is counted in 2nd over, in case of ODI in 5th over, not counted in case of Test Match & from the first over in case of T10.",
      ],
    },
    "For Warm - Up Matches": {
      table: [],
      notes: [
        "MyTeam11 allows a total of over 11 players from either side of the competing duo to participate in the game.",
        "No points for being included in the playing team, or being called on the field to play will be awarded. The only points that will be given will be based on the scores made during the play on the field.",
        "The players will not be given any points for being included in the Starting 11 in Warm-up match formats.",
      ],
    },
    "Impact and x - factor substitutes player rules": {
      table: [
        { type: "Impact Player Substitutes", point: "+2" },
        { type: "Substitute added through X-factor in Australia T20 League", point: "+2" },
      ],
      notes: [
        "Only those Impact players will receive +2 points, who are called upon during the match to replace a member of the Playing XI. They will also score points as per MyTeam11's Fantasy Point System, if and when they contribute to the match.",
        "Substitutes that are not categorised as Concussion substitutes, X-factor substitutes or Impact Player substitutes will not score or receive any points for their contribution to the match.",
        "X-factor substitutes rules:",
        "The 'X-factor Player' rule will be only applicable to the Australian T20 League. According to this rule, a team can replace a player from the initial XI with the 12th or 13th man on the team sheet. The X Factor player will be available after completion of 10th over of 1st inning. The player who is being replaced hasn't bowled more than one over or hasn't batted yet in the game.",
        "Any X-factor player will be given +2 points only when the player makes an on-field appearance as a substitute and rest of the points will be given on the basis of his in-game performance.",
        "Please note that the fantasy points system of normal fantasy & live fantasy are same.",
        "The fantasy points system of Sixty Ball Championship is similar to T-10 format.",
      ],
    },
    "Other Terms & Conditions": {
      table: [],
      notes: [
        "The captain and vice-captain you choose to lead your team are awarded 2x and 1.5x points of the original total they score. However, in case of the deductions, the points of your captain are deducted as 2x only. The same is applicable in case of vice-captain.",
        "In case a substitute replaces any on-field player in any circumstance, then the substitute will not be awarded any points for his/her part on the field. However, in case a player is announced as a Concussion Substitute, then the player shall be awarded (2) points for making an appearance on the field along with the points awarded on the basis of his/ her on-field performance.",
        "In case any on-field player is transferred in the middle of the series or game or already scheduled update, then such change shall not be reflected in the MyTeam11 roster immediately. The change might be reflected from the next scheduled update. The player will be available for selection on MyTeam11 amid the change made between the game or already scheduled update, but the player will not be awarded any points in MyTeam11.",
        "The players are awarded scoring points on the basis of the announcements made regarding their inclusion in the playing team for the game. In a scenario wherein a player, after being included in the team sheet for the match is unable to start the match, the player will not be awarded any points. However, the points shall be awarded to any player who acts as a replacement of such players who were included in the team sheet, but were unable to start the match and participate in the game.",
        "If a match is being completed through the D/L method and a team plays for 50 overs in the first innings, it is mandatory for the other team to play at least 20 overs in ODIs and 5 Overs in T20s for the second innings.",
        "No points will be awarded to the users during the Super Over of the game",
      ],
    },
    "LIVE Fantasy Terms & Conditions": {
      table: [],
      notes: ["Content for LIVE Fantasy Terms & Conditions will go here."],
    },
    "The Hundred Cricket T&C": {
      table: [],
      notes: ["Content for The Hundred Cricket T&C will go here."],
    },
  }

  return (
    <div className="min-h-screen bg-[#fffcfc]">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-[#1b1253]/80 to-[#494175]/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('Assets/PointSystem/ground.jpg')",
          }}
        />
        <div className="" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white mb-4">FANTASY POINTS SYSTEM CRICKET</h1>
          <p className="text-xl text-white/90">Thatcampairs How You Score to become a Winner!</p>
        </div>
      </section>

      {/* Format Tabs */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <Card className="border border-[#d3d3d3] bg-white shadow-sm">
          <CardContent className="p-2 flex flex-wrap gap-1 justify-around">
            {formatTabs.map((format, index) => (
              <Button
                key={format}
                variant="ghost"
                onClick={() => setSelectedFormat(format)}
                className={
                  `px-6 py-2 rounded-md font-medium text-base ` +
                  (format === selectedFormat ? "bg-[#494175] text-white hover:bg-[#494175]/90" : "text-[#000000] hover:bg-gray-100")
                }
              >
                {format}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Point Sections */}
        <div className="space-y-4 mt-8">
          {pointSections.map((section) => (
            <Card key={section} className="border border-[#d3d3d3] bg-white">
              <Collapsible open={openSection === section} onOpenChange={() => setOpenSection(openSection === section ? null : section)}>
                <CollapsibleTrigger asChild>
                  <CardContent className="p-4 cursor-pointer hover:bg-[#d3d3d3]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#000000] font-medium text-lg">{section}</h3>
                      <ChevronDown className="h-5 w-5 text-[#494175] transition-transform duration-200" />
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-4 pb-4 pt-0">
                    {sectionData[section]?.table && sectionData[section].table.length > 0 && (
                      <div className="overflow-x-auto mb-4">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-[#494175]">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider"
                              >
                                Point
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {sectionData[section].table.map((row: TableDataItem, rowIndex: number) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 1 ? 'bg-[#eeeeee]' : ''}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {row.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                  {row.point}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {sectionData[section]?.notes && sectionData[section].notes.length > 0 && (
                      <div className="space-y-2 text-[#000000]/70 text-sm">
                        {sectionData[section].notes.map((note: string, noteIndex: number) => (
                          <p key={noteIndex}>{note}</p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>
  
        {/* Footer */}
        
      </div>
    )
  }