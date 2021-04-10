/**
 * Copied from https://github.com/schemaorg/schemaorg/blob/main/data/schema.ttl
 * License below.
 *
 * TODO: Download this at runtime instead of hardcoding.
 */
/*

Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const schemaOrgTurtleFileString = `
@prefix ns1: <http://www.w3.org/2004/02/skos/core#> .
@prefix ns2: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix schema: <https://schema.org/> .

schema:3DModel a rdfs:Class ;
    rdfs:label "3DModel" ;
    rdfs:comment """A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D formats are available (e.g. see [Wikipedia](https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats)); specific encoding formats can be represented using the [[encodingFormat]] property applied to the relevant [[MediaObject]]. For the
case of a single file published after Zip compression, the convention of appending '+zip' to the [[encodingFormat]] can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using [[3DModel]].""" ;
    rdfs:subClassOf schema:MediaObject ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2140> .

schema:AMRadioChannel a rdfs:Class ;
    rdfs:label "AMRadioChannel" ;
    rdfs:comment "A radio channel that uses AM." ;
    rdfs:subClassOf schema:RadioChannel ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:APIReference a rdfs:Class ;
    rdfs:label "APIReference" ;
    rdfs:comment "Reference documentation for application programming interfaces (APIs)." ;
    rdfs:subClassOf schema:TechArticle .

schema:AboutPage a rdfs:Class ;
    rdfs:label "AboutPage" ;
    rdfs:comment "Web page type: About page." ;
    rdfs:subClassOf schema:WebPage .

schema:AcceptAction a rdfs:Class ;
    rdfs:label "AcceptAction" ;
    rdfs:comment "The act of committing to/adopting an object.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[RejectAction]]: The antonym of AcceptAction." ;
    rdfs:subClassOf schema:AllocateAction .

schema:Accommodation a rdfs:Class ;
    rdfs:label "Accommodation" ;
    rdfs:comment """An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:Place ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:AccountingService a rdfs:Class ;
    rdfs:label "AccountingService" ;
    rdfs:comment """Accountancy business.\\\\n\\\\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\\\\(s).
      """ ;
    rdfs:subClassOf schema:FinancialService .

schema:AchieveAction a rdfs:Class ;
    rdfs:label "AchieveAction" ;
    rdfs:comment "The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process." ;
    rdfs:subClassOf schema:Action .

schema:Action a rdfs:Class ;
    rdfs:label "Action" ;
    rdfs:comment "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html)." ;
    rdfs:subClassOf schema:Thing ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> .

schema:ActionAccessSpecification a rdfs:Class ;
    rdfs:label "ActionAccessSpecification" ;
    rdfs:comment "A set of requirements that a must be fulfilled in order to perform an Action." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:ActionStatusType a rdfs:Class ;
    rdfs:label "ActionStatusType" ;
    rdfs:comment "The status of an Action." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:ActivateAction a rdfs:Class ;
    rdfs:label "ActivateAction" ;
    rdfs:comment "The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight)." ;
    rdfs:subClassOf schema:ControlAction .

schema:AddAction a rdfs:Class ;
    rdfs:label "AddAction" ;
    rdfs:comment "The act of editing by adding an object to a collection." ;
    rdfs:subClassOf schema:UpdateAction .

schema:AdministrativeArea a rdfs:Class ;
    rdfs:label "AdministrativeArea" ;
    rdfs:comment "A geographical region, typically under the jurisdiction of a particular government." ;
    rdfs:subClassOf schema:Place .

schema:AdultEntertainment a rdfs:Class ;
    rdfs:label "AdultEntertainment" ;
    rdfs:comment "An adult entertainment establishment." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:AdvertiserContentArticle a rdfs:Class ;
    rdfs:label "AdvertiserContentArticle" ;
    rdfs:comment "An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content." ;
    rdfs:subClassOf schema:Article ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:AggregateOffer a rdfs:Class ;
    rdfs:label "AggregateOffer" ;
    rdfs:comment "When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\\\\n\\\\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined." ;
    rdfs:subClassOf schema:Offer .

schema:AggregateRating a rdfs:Class ;
    rdfs:label "AggregateRating" ;
    rdfs:comment "The average rating based on multiple ratings or reviews." ;
    rdfs:subClassOf schema:Rating .

schema:AgreeAction a rdfs:Class ;
    rdfs:label "AgreeAction" ;
    rdfs:comment "The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:Airline a rdfs:Class ;
    rdfs:label "Airline" ;
    rdfs:comment "An organization that provides flights for passengers." ;
    rdfs:subClassOf schema:Organization .

schema:Airport a rdfs:Class ;
    rdfs:label "Airport" ;
    rdfs:comment "An airport." ;
    rdfs:subClassOf schema:CivicStructure .

schema:AlignmentObject a rdfs:Class ;
    rdfs:label "AlignmentObject" ;
    rdfs:comment """An intangible item that describes an alignment between a learning resource and a node in an educational framework.

Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.""" ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass> .

schema:AllocateAction a rdfs:Class ;
    rdfs:label "AllocateAction" ;
    rdfs:comment "The act of organizing tasks/objects/events by associating resources to it." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:AmpStory a rdfs:Class ;
    rdfs:label "AmpStory" ;
    rdfs:comment "A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2646> .

schema:AmusementPark a rdfs:Class ;
    rdfs:label "AmusementPark" ;
    rdfs:comment "An amusement park." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:AnalysisNewsArticle a rdfs:Class ;
    rdfs:label "AnalysisNewsArticle" ;
    rdfs:comment "An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions." ;
    rdfs:subClassOf schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:AnatomicalStructure a rdfs:Class ;
    rdfs:label "AnatomicalStructure" ;
    rdfs:comment "Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:AnatomicalSystem a rdfs:Class ;
    rdfs:label "AnatomicalSystem" ;
    rdfs:comment "An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:AnimalShelter a rdfs:Class ;
    rdfs:label "AnimalShelter" ;
    rdfs:comment "Animal shelter." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Answer a rdfs:Class ;
    rdfs:label "Answer" ;
    rdfs:comment "An answer offered to a question; perhaps correct, perhaps opinionated or wrong." ;
    rdfs:subClassOf schema:Comment ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange> .

schema:Apartment a rdfs:Class ;
    rdfs:label "Apartment" ;
    rdfs:comment "An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href=\\"http://en.wikipedia.org/wiki/Apartment\\">http://en.wikipedia.org/wiki/Apartment</a>)." ;
    rdfs:subClassOf schema:Accommodation ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:ApartmentComplex a rdfs:Class ;
    rdfs:label "ApartmentComplex" ;
    rdfs:comment "Residence type: Apartment complex." ;
    rdfs:subClassOf schema:Residence .

schema:AppendAction a rdfs:Class ;
    rdfs:label "AppendAction" ;
    rdfs:comment "The act of inserting at the end if an ordered collection." ;
    rdfs:subClassOf schema:InsertAction .

schema:ApplyAction a rdfs:Class ;
    rdfs:label "ApplyAction" ;
    rdfs:comment "The act of registering to an organization/service without the guarantee to receive it.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:ApprovedIndication a rdfs:Class ;
    rdfs:label "ApprovedIndication" ;
    rdfs:comment "An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US." ;
    rdfs:subClassOf schema:MedicalIndication ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Aquarium a rdfs:Class ;
    rdfs:label "Aquarium" ;
    rdfs:comment "Aquarium." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ArchiveComponent a rdfs:Class ;
    rdfs:label "ArchiveComponent"@en ;
    rdfs:comment "An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections."@en ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1758> .

schema:ArchiveOrganization a rdfs:Class ;
    rdfs:label "ArchiveOrganization"@en ;
    rdfs:comment "An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public."@en ;
    rdfs:subClassOf schema:LocalBusiness ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1758> .

schema:ArriveAction a rdfs:Class ;
    rdfs:label "ArriveAction" ;
    rdfs:comment "The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:ArtGallery a rdfs:Class ;
    rdfs:label "ArtGallery" ;
    rdfs:comment "An art gallery." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:Artery a rdfs:Class ;
    rdfs:label "Artery" ;
    rdfs:comment "A type of blood vessel that specifically carries blood away from the heart." ;
    rdfs:subClassOf schema:Vessel ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/51114001> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Article a rdfs:Class ;
    rdfs:label "Article" ;
    rdfs:comment "An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html)." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:AskAction a rdfs:Class ;
    rdfs:label "AskAction" ;
    rdfs:comment "The act of posing a question / favor to someone.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[ReplyAction]]: Appears generally as a response to AskAction." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:AskPublicNewsArticle a rdfs:Class ;
    rdfs:label "AskPublicNewsArticle" ;
    rdfs:comment "A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes." ;
    rdfs:subClassOf schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:AssessAction a rdfs:Class ;
    rdfs:label "AssessAction" ;
    rdfs:comment "The act of forming one's opinion, reaction or sentiment." ;
    rdfs:subClassOf schema:Action .

schema:AssignAction a rdfs:Class ;
    rdfs:label "AssignAction" ;
    rdfs:comment "The act of allocating an action/event/task to some destination (someone or something)." ;
    rdfs:subClassOf schema:AllocateAction .

schema:Atlas a rdfs:Class ;
    rdfs:label "Atlas" ;
    rdfs:comment "A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:source <http://www.productontology.org/id/Atlas> .

schema:Attorney a rdfs:Class ;
    rdfs:label "Attorney" ;
    rdfs:comment "Professional service: Attorney. \\\\n\\\\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous." ;
    rdfs:subClassOf schema:LegalService .

schema:Audience a rdfs:Class ;
    rdfs:label "Audience" ;
    rdfs:comment "Intended audience for an item, i.e. the group for whom the item was created." ;
    rdfs:subClassOf schema:Intangible .

schema:AudioObject a rdfs:Class ;
    rdfs:label "AudioObject" ;
    rdfs:comment "An audio file." ;
    rdfs:subClassOf schema:MediaObject ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:Audiobook a rdfs:Class ;
    rdfs:label "Audiobook" ;
    rdfs:comment "An audiobook." ;
    rdfs:subClassOf schema:AudioObject,
        schema:Book ;
    schema:isPartOf <https://bib.schema.org> .

schema:AuthorizeAction a rdfs:Class ;
    rdfs:label "AuthorizeAction" ;
    rdfs:comment "The act of granting permission to an object." ;
    rdfs:subClassOf schema:AllocateAction .

schema:AutoBodyShop a rdfs:Class ;
    rdfs:label "AutoBodyShop" ;
    rdfs:comment "Auto body shop." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoDealer a rdfs:Class ;
    rdfs:label "AutoDealer" ;
    rdfs:comment "An car dealership." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoPartsStore a rdfs:Class ;
    rdfs:label "AutoPartsStore" ;
    rdfs:comment "An auto parts store." ;
    rdfs:subClassOf schema:AutomotiveBusiness,
        schema:Store .

schema:AutoRental a rdfs:Class ;
    rdfs:label "AutoRental" ;
    rdfs:comment "A car rental business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoRepair a rdfs:Class ;
    rdfs:label "AutoRepair" ;
    rdfs:comment "Car repair business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutoWash a rdfs:Class ;
    rdfs:label "AutoWash" ;
    rdfs:comment "A car wash business." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:AutomatedTeller a rdfs:Class ;
    rdfs:label "AutomatedTeller" ;
    rdfs:comment "ATM/cash machine." ;
    rdfs:subClassOf schema:FinancialService .

schema:AutomotiveBusiness a rdfs:Class ;
    rdfs:label "AutomotiveBusiness" ;
    rdfs:comment "Car repair, sales, or parts." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:BackgroundNewsArticle a rdfs:Class ;
    rdfs:label "BackgroundNewsArticle" ;
    rdfs:comment "A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka \\"explainer\\" or \\"backgrounder\\"). For example, an in-depth article or frequently-asked-questions ([FAQ](https://en.wikipedia.org/wiki/FAQ)) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using [[Book]] or [[Article]], in particular [[ScholarlyArticle]]. See also [[NewsArticle]] for related vocabulary from a learning/education perspective." ;
    rdfs:subClassOf schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:Bakery a rdfs:Class ;
    rdfs:label "Bakery" ;
    rdfs:comment "A bakery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:BankAccount a rdfs:Class ;
    rdfs:label "BankAccount" ;
    rdfs:comment "A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest." ;
    rdfs:subClassOf schema:FinancialProduct ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:BankOrCreditUnion a rdfs:Class ;
    rdfs:label "BankOrCreditUnion" ;
    rdfs:comment "Bank or credit union." ;
    rdfs:subClassOf schema:FinancialService .

schema:BarOrPub a rdfs:Class ;
    rdfs:label "BarOrPub" ;
    rdfs:comment "A bar or pub." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Barcode a rdfs:Class ;
    rdfs:label "Barcode" ;
    rdfs:comment "An image of a visual machine-readable code such as a barcode or QR code." ;
    rdfs:subClassOf schema:ImageObject .

schema:Beach a rdfs:Class ;
    rdfs:label "Beach" ;
    rdfs:comment "Beach." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BeautySalon a rdfs:Class ;
    rdfs:label "BeautySalon" ;
    rdfs:comment "Beauty salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:BedAndBreakfast a rdfs:Class ;
    rdfs:label "BedAndBreakfast" ;
    rdfs:comment """Bed and breakfast.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:BedDetails a rdfs:Class ;
    rdfs:label "BedDetails" ;
    rdfs:comment "An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development)." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:BedType a rdfs:Class ;
    rdfs:label "BedType" ;
    rdfs:comment "A type of bed. This is used for indicating the bed or beds available in an accommodation." ;
    rdfs:subClassOf schema:QualitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1262>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:BefriendAction a rdfs:Class ;
    rdfs:label "BefriendAction" ;
    rdfs:comment "The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal." ;
    rdfs:subClassOf schema:InteractAction .

schema:BikeStore a rdfs:Class ;
    rdfs:label "BikeStore" ;
    rdfs:comment "A bike store." ;
    rdfs:subClassOf schema:Store .

schema:Blog a rdfs:Class ;
    rdfs:label "Blog" ;
    rdfs:comment "A blog." ;
    rdfs:subClassOf schema:CreativeWork .

schema:BlogPosting a rdfs:Class ;
    rdfs:label "BlogPosting" ;
    rdfs:comment "A blog post." ;
    rdfs:subClassOf schema:SocialMediaPosting .

schema:BloodTest a rdfs:Class ;
    rdfs:label "BloodTest" ;
    rdfs:comment "A medical test performed on a sample of a patient's blood." ;
    rdfs:subClassOf schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:BoardingPolicyType a rdfs:Class ;
    rdfs:label "BoardingPolicyType" ;
    rdfs:comment "A type of boarding policy used by an airline." ;
    rdfs:subClassOf schema:Enumeration .

schema:BoatReservation a rdfs:Class ;
    rdfs:label "BoatReservation" ;
    rdfs:comment """A reservation for boat travel.

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].""" ;
    rdfs:subClassOf schema:Reservation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1755> .

schema:BoatTerminal a rdfs:Class ;
    rdfs:label "BoatTerminal" ;
    rdfs:comment "A terminal for boats, ships, and other water vessels." ;
    rdfs:subClassOf schema:CivicStructure ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1755> .

schema:BoatTrip a rdfs:Class ;
    rdfs:label "BoatTrip" ;
    rdfs:comment "A trip on a commercial ferry line." ;
    rdfs:subClassOf schema:Trip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1755> .

schema:BodyMeasurementTypeEnumeration a rdfs:Class ;
    rdfs:label "BodyMeasurementTypeEnumeration" ;
    rdfs:comment "Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes." ;
    rdfs:subClassOf schema:MeasurementTypeEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyOfWater a rdfs:Class ;
    rdfs:label "BodyOfWater" ;
    rdfs:comment "A body of water, such as a sea, ocean, or lake." ;
    rdfs:subClassOf schema:Landform .

schema:Bone a rdfs:Class ;
    rdfs:label "Bone" ;
    rdfs:comment "Rigid connective tissue that comprises up the skeletal structure of the human body." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Book a rdfs:Class ;
    rdfs:label "Book" ;
    rdfs:comment "A book." ;
    rdfs:subClassOf schema:CreativeWork .

schema:BookFormatType a rdfs:Class ;
    rdfs:label "BookFormatType" ;
    rdfs:comment "The publication format of the book." ;
    rdfs:subClassOf schema:Enumeration .

schema:BookSeries a rdfs:Class ;
    rdfs:label "BookSeries" ;
    rdfs:comment "A series of books. Included books can be indicated with the hasPart property." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:BookStore a rdfs:Class ;
    rdfs:label "BookStore" ;
    rdfs:comment "A bookstore." ;
    rdfs:subClassOf schema:Store .

schema:BookmarkAction a rdfs:Class ;
    rdfs:label "BookmarkAction" ;
    rdfs:comment "An agent bookmarks/flags/labels/tags/marks an object." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:Boolean a rdfs:Class,
        schema:DataType ;
    rdfs:label "Boolean" ;
    rdfs:comment "Boolean: True or False." .

schema:BorrowAction a rdfs:Class ;
    rdfs:label "BorrowAction" ;
    rdfs:comment "The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[LendAction]]: Reciprocal of BorrowAction." ;
    rdfs:subClassOf schema:TransferAction .

schema:BowlingAlley a rdfs:Class ;
    rdfs:label "BowlingAlley" ;
    rdfs:comment "A bowling alley." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:BrainStructure a rdfs:Class ;
    rdfs:label "BrainStructure" ;
    rdfs:comment "Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Brand a rdfs:Class ;
    rdfs:label "Brand" ;
    rdfs:comment "A brand is a name used by an organization or business person for labeling a product, product group, or similar." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:BreadcrumbList a rdfs:Class ;
    rdfs:label "BreadcrumbList" ;
    rdfs:comment """A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.\\\\n\\\\nThe [[position]] property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an [[itemListOrder]] of [[ItemListOrderAscending]] (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
      """ ;
    rdfs:subClassOf schema:ItemList .

schema:Brewery a rdfs:Class ;
    rdfs:label "Brewery" ;
    rdfs:comment "Brewery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Bridge a rdfs:Class ;
    rdfs:label "Bridge" ;
    rdfs:comment "A bridge." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BroadcastChannel a rdfs:Class ;
    rdfs:label "BroadcastChannel" ;
    rdfs:comment "A unique instance of a BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:Intangible .

schema:BroadcastEvent a rdfs:Class ;
    rdfs:label "BroadcastEvent" ;
    rdfs:comment "An over the air or online broadcast event." ;
    rdfs:subClassOf schema:PublicationEvent .

schema:BroadcastFrequencySpecification a rdfs:Class ;
    rdfs:label "BroadcastFrequencySpecification" ;
    rdfs:comment "The frequency in MHz and the modulation used for a particular BroadcastService." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:BroadcastService a rdfs:Class ;
    rdfs:label "BroadcastService" ;
    rdfs:comment "A delivery service through which content is provided via broadcast over the air or online." ;
    rdfs:subClassOf schema:Service .

schema:BrokerageAccount a rdfs:Class ;
    rdfs:label "BrokerageAccount" ;
    rdfs:comment "An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm." ;
    rdfs:subClassOf schema:InvestmentOrDeposit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:BuddhistTemple a rdfs:Class ;
    rdfs:label "BuddhistTemple" ;
    rdfs:comment "A Buddhist temple." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:BusOrCoach a rdfs:Class ;
    rdfs:label "BusOrCoach" ;
    rdfs:comment "A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel." ;
    rdfs:subClassOf schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:BusReservation a rdfs:Class ;
    rdfs:label "BusReservation" ;
    rdfs:comment "A reservation for bus travel. \\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]." ;
    rdfs:subClassOf schema:Reservation .

schema:BusStation a rdfs:Class ;
    rdfs:label "BusStation" ;
    rdfs:comment "A bus station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BusStop a rdfs:Class ;
    rdfs:label "BusStop" ;
    rdfs:comment "A bus stop." ;
    rdfs:subClassOf schema:CivicStructure .

schema:BusTrip a rdfs:Class ;
    rdfs:label "BusTrip" ;
    rdfs:comment "A trip on a commercial bus line." ;
    rdfs:subClassOf schema:Trip .

schema:BusinessAudience a rdfs:Class ;
    rdfs:label "BusinessAudience" ;
    rdfs:comment "A set of characteristics belonging to businesses, e.g. who compose an item's target audience." ;
    rdfs:subClassOf schema:Audience .

schema:BusinessEntityType a rdfs:Class ;
    rdfs:label "BusinessEntityType" ;
    rdfs:comment """A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#Business\\\\n* http://purl.org/goodrelations/v1#Enduser\\\\n* http://purl.org/goodrelations/v1#PublicInstitution\\\\n* http://purl.org/goodrelations/v1#Reseller
	  """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:BusinessEvent a rdfs:Class ;
    rdfs:label "BusinessEvent" ;
    rdfs:comment "Event type: Business event." ;
    rdfs:subClassOf schema:Event .

schema:BusinessFunction a rdfs:Class ;
    rdfs:label "BusinessFunction" ;
    rdfs:comment """The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#ConstructionInstallation\\\\n* http://purl.org/goodrelations/v1#Dispose\\\\n* http://purl.org/goodrelations/v1#LeaseOut\\\\n* http://purl.org/goodrelations/v1#Maintain\\\\n* http://purl.org/goodrelations/v1#ProvideService\\\\n* http://purl.org/goodrelations/v1#Repair\\\\n* http://purl.org/goodrelations/v1#Sell\\\\n* http://purl.org/goodrelations/v1#Buy
        """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:BuyAction a rdfs:Class ;
    rdfs:label "BuyAction" ;
    rdfs:comment "The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction." ;
    rdfs:subClassOf schema:TradeAction .

schema:CDCPMDRecord a rdfs:Class ;
    rdfs:label "CDCPMDRecord" ;
    rdfs:comment """A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
      used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
      definitions used as the source here.
      """ ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:CableOrSatelliteService a rdfs:Class ;
    rdfs:label "CableOrSatelliteService" ;
    rdfs:comment "A service which provides access to media programming like TV or radio. Access may be via cable or satellite." ;
    rdfs:subClassOf schema:Service .

schema:CafeOrCoffeeShop a rdfs:Class ;
    rdfs:label "CafeOrCoffeeShop" ;
    rdfs:comment "A cafe or coffee shop." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Campground a rdfs:Class ;
    rdfs:label "Campground" ;
    rdfs:comment """A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing individual [[CampingPitch]] locations. \\\\n\\\\n
In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\\\\n\\\\n

See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
""" ;
    rdfs:subClassOf schema:CivicStructure,
        schema:LodgingBusiness ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:CampingPitch a rdfs:Class ;
    rdfs:label "CampingPitch" ;
    rdfs:comment """A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or [[Campground]].\\\\n\\\\n
In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
(Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\\\\n\\\\n
See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
""" ;
    rdfs:subClassOf schema:Accommodation ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:Canal a rdfs:Class ;
    rdfs:label "Canal" ;
    rdfs:comment "A canal, like the Panama Canal." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:CancelAction a rdfs:Class ;
    rdfs:label "CancelAction" ;
    rdfs:comment "The act of asserting that a future event/action is no longer going to happen.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[ConfirmAction]]: The antonym of CancelAction." ;
    rdfs:subClassOf schema:PlanAction .

schema:Car a rdfs:Class ;
    rdfs:label "Car" ;
    rdfs:comment "A car is a wheeled, self-powered motor vehicle used for transportation." ;
    rdfs:subClassOf schema:Vehicle ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:CarUsageType a rdfs:Class ;
    rdfs:label "CarUsageType" ;
    rdfs:comment "A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Casino a rdfs:Class ;
    rdfs:label "Casino" ;
    rdfs:comment "A casino." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:CategoryCode a rdfs:Class ;
    rdfs:label "CategoryCode" ;
    rdfs:comment "A Category Code." ;
    rdfs:subClassOf schema:DefinedTerm ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:CategoryCodeSet a rdfs:Class ;
    rdfs:label "CategoryCodeSet" ;
    rdfs:comment "A set of Category Code values." ;
    rdfs:subClassOf schema:DefinedTermSet ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:CatholicChurch a rdfs:Class ;
    rdfs:label "CatholicChurch" ;
    rdfs:comment "A Catholic church." ;
    rdfs:subClassOf schema:Church .

schema:Cemetery a rdfs:Class ;
    rdfs:label "Cemetery" ;
    rdfs:comment "A graveyard." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Chapter a rdfs:Class ;
    rdfs:label "Chapter" ;
    rdfs:comment "One of the sections into which a book is divided. A chapter usually has a section number or a name." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> .

schema:CheckAction a rdfs:Class ;
    rdfs:label "CheckAction" ;
    rdfs:comment "An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state." ;
    rdfs:subClassOf schema:FindAction .

schema:CheckInAction a rdfs:Class ;
    rdfs:label "CheckInAction" ;
    rdfs:comment "The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).\\\\n\\\\nRelated actions:\\\\n\\\\n* [[CheckOutAction]]: The antonym of CheckInAction.\\\\n* [[ArriveAction]]: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.\\\\n* [[ConfirmAction]]: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the *start* of a previously reserved service rather than its validity/existence." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CheckOutAction a rdfs:Class ;
    rdfs:label "CheckOutAction" ;
    rdfs:comment "The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).\\\\n\\\\nRelated actions:\\\\n\\\\n* [[CheckInAction]]: The antonym of CheckOutAction.\\\\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\\\\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CheckoutPage a rdfs:Class ;
    rdfs:label "CheckoutPage" ;
    rdfs:comment "Web page type: Checkout page." ;
    rdfs:subClassOf schema:WebPage .

schema:ChildCare a rdfs:Class ;
    rdfs:label "ChildCare" ;
    rdfs:comment "A Childcare center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ChildrensEvent a rdfs:Class ;
    rdfs:label "ChildrensEvent" ;
    rdfs:comment "Event type: Children's event." ;
    rdfs:subClassOf schema:Event .

schema:ChooseAction a rdfs:Class ;
    rdfs:label "ChooseAction" ;
    rdfs:comment "The act of expressing a preference from a set of options or a large or unbounded set of choices/options." ;
    rdfs:subClassOf schema:AssessAction .

schema:Church a rdfs:Class ;
    rdfs:label "Church" ;
    rdfs:comment "A church." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:City a rdfs:Class ;
    rdfs:label "City" ;
    rdfs:comment "A city or town." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:CityHall a rdfs:Class ;
    rdfs:label "CityHall" ;
    rdfs:comment "A city hall." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:CivicStructure a rdfs:Class ;
    rdfs:label "CivicStructure" ;
    rdfs:comment "A public structure, such as a town hall or concert hall." ;
    rdfs:subClassOf schema:Place .

schema:Claim a rdfs:Class ;
    rdfs:label "Claim" ;
    rdfs:comment """A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.

  Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].

  At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
  """ ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1828> .

schema:ClaimReview a rdfs:Class ;
    rdfs:label "ClaimReview" ;
    rdfs:comment "A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed)." ;
    rdfs:subClassOf schema:Review ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1061> .

schema:Class a rdfs:Class ;
    rdfs:label "Class" ;
    rdfs:comment "A class, also often called a 'Type'; equivalent to rdfs:Class." ;
    rdfs:subClassOf schema:Intangible ;
    ns2:equivalentClass rdfs:Class ;
    schema:isPartOf <https://meta.schema.org> .

schema:Clip a rdfs:Class ;
    rdfs:label "Clip" ;
    rdfs:comment "A short TV or radio program or a segment/part of a program." ;
    rdfs:subClassOf schema:CreativeWork .

schema:ClothingStore a rdfs:Class ;
    rdfs:label "ClothingStore" ;
    rdfs:comment "A clothing store." ;
    rdfs:subClassOf schema:Store .

schema:Code a rdfs:Class ;
    rdfs:label "Code" ;
    rdfs:comment "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:supersededBy schema:SoftwareSourceCode .

schema:Collection a rdfs:Class ;
    rdfs:label "Collection" ;
    rdfs:comment "A collection of items e.g. creative works or products." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> .

schema:CollectionPage a rdfs:Class ;
    rdfs:label "CollectionPage" ;
    rdfs:comment "Web page type: Collection page." ;
    rdfs:subClassOf schema:WebPage .

schema:CollegeOrUniversity a rdfs:Class ;
    rdfs:label "CollegeOrUniversity" ;
    rdfs:comment "A college, university, or other third-level educational institution." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:ComedyClub a rdfs:Class ;
    rdfs:label "ComedyClub" ;
    rdfs:comment "A comedy club." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:ComedyEvent a rdfs:Class ;
    rdfs:label "ComedyEvent" ;
    rdfs:comment "Event type: Comedy event." ;
    rdfs:subClassOf schema:Event .

schema:ComicCoverArt a rdfs:Class ;
    rdfs:label "ComicCoverArt" ;
    rdfs:comment "The artwork on the cover of a comic." ;
    rdfs:subClassOf schema:ComicStory,
        schema:CoverArt ;
    schema:isPartOf <https://bib.schema.org> .

schema:ComicIssue a rdfs:Class ;
    rdfs:label "ComicIssue" ;
    rdfs:comment """Individual comic issues are serially published as
    	part of a larger series. For the sake of consistency, even one-shot issues
    	belong to a series comprised of a single issue. All comic issues can be
    	uniquely identified by: the combination of the name and volume number of the
    	series to which the issue belongs; the issue number; and the variant
    	description of the issue (if any).""" ;
    rdfs:subClassOf schema:PublicationIssue ;
    schema:isPartOf <https://bib.schema.org> .

schema:ComicSeries a rdfs:Class ;
    rdfs:label "ComicSeries" ;
    rdfs:comment """A sequential publication of comic stories under a
    	unifying title, for example "The Amazing Spider-Man" or "Groo the
    	Wanderer".""" ;
    rdfs:subClassOf schema:Periodical ;
    schema:isPartOf <https://bib.schema.org> .

schema:ComicStory a rdfs:Class ;
    rdfs:label "ComicStory" ;
    rdfs:comment """The term "story" is any indivisible, re-printable
    	unit of a comic, including the interior stories, covers, and backmatter. Most
    	comics have at least two stories: a cover (ComicCoverArt) and an interior story.""" ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> .

schema:Comment a rdfs:Class ;
    rdfs:label "Comment" ;
    rdfs:comment "A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CommentAction a rdfs:Class ;
    rdfs:label "CommentAction" ;
    rdfs:comment "The act of generating a comment about a subject." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:CommunicateAction a rdfs:Class ;
    rdfs:label "CommunicateAction" ;
    rdfs:comment "The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation." ;
    rdfs:subClassOf schema:InteractAction .

schema:CompleteDataFeed a rdfs:Class ;
    rdfs:label "CompleteDataFeed" ;
    rdfs:comment """A [[CompleteDataFeed]] is a [[DataFeed]] whose standard representation includes content for every item currently in the feed.

This is the equivalent of Atom's element as defined in Feed Paging and Archiving [RFC 5005](https://tools.ietf.org/html/rfc5005), For example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.""" ;
    rdfs:subClassOf schema:DataFeed ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1397> .

schema:CompoundPriceSpecification a rdfs:Class ;
    rdfs:label "CompoundPriceSpecification" ;
    rdfs:comment "A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. \\"electricity\\" or \\"final cleaning\\")." ;
    rdfs:subClassOf schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:ComputerLanguage a rdfs:Class ;
    rdfs:label "ComputerLanguage" ;
    rdfs:comment "This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type." ;
    rdfs:subClassOf schema:Intangible .

schema:ComputerStore a rdfs:Class ;
    rdfs:label "ComputerStore" ;
    rdfs:comment "A computer store." ;
    rdfs:subClassOf schema:Store .

schema:ConfirmAction a rdfs:Class ;
    rdfs:label "ConfirmAction" ;
    rdfs:comment "The act of notifying someone that a future event/action is going to happen as expected.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[CancelAction]]: The antonym of ConfirmAction." ;
    rdfs:subClassOf schema:InformAction .

schema:Consortium a rdfs:Class ;
    rdfs:label "Consortium" ;
    rdfs:comment "A Consortium is a membership [[Organization]] whose members are typically Organizations." ;
    rdfs:subClassOf schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1559> .

schema:ConsumeAction a rdfs:Class ;
    rdfs:label "ConsumeAction" ;
    rdfs:comment "The act of ingesting information/resources/food." ;
    rdfs:subClassOf schema:Action .

schema:ContactPage a rdfs:Class ;
    rdfs:label "ContactPage" ;
    rdfs:comment "Web page type: Contact page." ;
    rdfs:subClassOf schema:WebPage .

schema:ContactPoint a rdfs:Class ;
    rdfs:label "ContactPoint" ;
    rdfs:comment "A contact point&#x2014;for example, a Customer Complaints department." ;
    rdfs:subClassOf schema:StructuredValue .

schema:ContactPointOption a rdfs:Class ;
    rdfs:label "ContactPointOption" ;
    rdfs:comment "Enumerated options related to a ContactPoint." ;
    rdfs:subClassOf schema:Enumeration .

schema:Continent a rdfs:Class ;
    rdfs:label "Continent" ;
    rdfs:comment "One of the continents (for example, Europe or Africa)." ;
    rdfs:subClassOf schema:Landform .

schema:ControlAction a rdfs:Class ;
    rdfs:label "ControlAction" ;
    rdfs:comment "An agent controls a device or application." ;
    rdfs:subClassOf schema:Action .

schema:ConvenienceStore a rdfs:Class ;
    rdfs:label "ConvenienceStore" ;
    rdfs:comment "A convenience store." ;
    rdfs:subClassOf schema:Store .

schema:Conversation a rdfs:Class ;
    rdfs:label "Conversation" ;
    rdfs:comment "One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CookAction a rdfs:Class ;
    rdfs:label "CookAction" ;
    rdfs:comment "The act of producing/preparing food." ;
    rdfs:subClassOf schema:CreateAction .

schema:Corporation a rdfs:Class ;
    rdfs:label "Corporation" ;
    rdfs:comment "Organization: A business corporation." ;
    rdfs:subClassOf schema:Organization ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:CorrectionComment a rdfs:Class ;
    rdfs:label "CorrectionComment" ;
    rdfs:comment "A [[comment]] that corrects [[CreativeWork]]." ;
    rdfs:subClassOf schema:Comment ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1950> .

schema:Country a rdfs:Class ;
    rdfs:label "Country" ;
    rdfs:comment "A country." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:Course a rdfs:Class ;
    rdfs:label "Course" ;
    rdfs:comment "A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:LearningResource .

schema:CourseInstance a rdfs:Class ;
    rdfs:label "CourseInstance" ;
    rdfs:comment "An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students." ;
    rdfs:subClassOf schema:Event .

schema:Courthouse a rdfs:Class ;
    rdfs:label "Courthouse" ;
    rdfs:comment "A courthouse." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:CoverArt a rdfs:Class ;
    rdfs:label "CoverArt" ;
    rdfs:comment "The artwork on the outer surface of a CreativeWork." ;
    rdfs:subClassOf schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> .

schema:CovidTestingFacility a rdfs:Class ;
    rdfs:label "CovidTestingFacility" ;
    rdfs:comment """A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus
      disease is available. If the facility is being made available from an established [[Pharmacy]], [[Hotel]], or other
      non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information
      about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable.
      """ ;
    rdfs:subClassOf schema:MedicalClinic ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:CreateAction a rdfs:Class ;
    rdfs:label "CreateAction" ;
    rdfs:comment "The act of deliberately creating/producing/generating/building a result out of the agent." ;
    rdfs:subClassOf schema:Action .

schema:CreativeWork a rdfs:Class ;
    rdfs:label "CreativeWork" ;
    rdfs:comment "The most generic kind of creative work, including books, movies, photographs, software programs, etc." ;
    rdfs:subClassOf schema:Thing ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:CreativeWorkSeason a rdfs:Class ;
    rdfs:label "CreativeWorkSeason" ;
    rdfs:comment "A media season e.g. tv, radio, video game etc." ;
    rdfs:subClassOf schema:CreativeWork .

schema:CreativeWorkSeries a rdfs:Class ;
    rdfs:label "CreativeWorkSeries" ;
    rdfs:comment """A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).\\\\n\\\\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\\\\n\\\\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
	  """ ;
    rdfs:subClassOf schema:CreativeWork,
        schema:Series .

schema:CreditCard a rdfs:Class ;
    rdfs:label "CreditCard" ;
    rdfs:comment """A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#AmericanExpress\\\\n* http://purl.org/goodrelations/v1#DinersClub\\\\n* http://purl.org/goodrelations/v1#Discover\\\\n* http://purl.org/goodrelations/v1#JCB\\\\n* http://purl.org/goodrelations/v1#MasterCard\\\\n* http://purl.org/goodrelations/v1#VISA
       """ ;
    rdfs:subClassOf schema:LoanOrCredit,
        schema:PaymentCard ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:Crematorium a rdfs:Class ;
    rdfs:label "Crematorium" ;
    rdfs:comment "A crematorium." ;
    rdfs:subClassOf schema:CivicStructure .

schema:CriticReview a rdfs:Class ;
    rdfs:label "CriticReview" ;
    rdfs:comment "A [[CriticReview]] is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. [[CriticReview]]s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the [[UserReview]] type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources." ;
    rdfs:subClassOf schema:Review ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1589> .

schema:CssSelectorType a rdfs:Class ;
    rdfs:label "CssSelectorType" ;
    rdfs:comment "Text representing a CSS selector." ;
    rdfs:subClassOf schema:Text ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1672> .

schema:CurrencyConversionService a rdfs:Class ;
    rdfs:label "CurrencyConversionService" ;
    rdfs:comment "A service to convert funds from one currency to another currency." ;
    rdfs:subClassOf schema:FinancialProduct ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:DDxElement a rdfs:Class ;
    rdfs:label "DDxElement" ;
    rdfs:comment "An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it." ;
    rdfs:subClassOf schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DanceEvent a rdfs:Class ;
    rdfs:label "DanceEvent" ;
    rdfs:comment "Event type: A social dance." ;
    rdfs:subClassOf schema:Event .

schema:DanceGroup a rdfs:Class ;
    rdfs:label "DanceGroup" ;
    rdfs:comment "A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:DataCatalog a rdfs:Class ;
    rdfs:label "DataCatalog" ;
    rdfs:comment "A collection of datasets." ;
    rdfs:subClassOf schema:CreativeWork ;
    ns2:equivalentClass <http://www.w3.org/ns/dcat#Catalog> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> .

schema:DataDownload a rdfs:Class ;
    rdfs:label "DataDownload" ;
    rdfs:comment "A dataset in downloadable form." ;
    rdfs:subClassOf schema:MediaObject ;
    ns2:equivalentClass <http://www.w3.org/ns/dcat#Distribution> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> .

schema:DataFeed a rdfs:Class ;
    rdfs:label "DataFeed" ;
    rdfs:comment "A single feed providing structured information about one or more entities or topics." ;
    rdfs:subClassOf schema:Dataset .

schema:DataFeedItem a rdfs:Class ;
    rdfs:label "DataFeedItem" ;
    rdfs:comment "A single item within a larger data feed." ;
    rdfs:subClassOf schema:Intangible .

schema:DataType a rdfs:Class ;
    rdfs:label "DataType" ;
    rdfs:comment "The basic data types such as Integers, Strings, etc." ;
    rdfs:subClassOf rdfs:Class .

schema:Dataset a rdfs:Class ;
    rdfs:label "Dataset" ;
    rdfs:comment "A body of structured information describing some topic(s) of interest." ;
    rdfs:subClassOf schema:CreativeWork ;
    ns2:equivalentClass <http://purl.org/dc/dcmitype/Dataset>,
        <http://rdfs.org/ns/void#Dataset>,
        <http://www.w3.org/ns/dcat#Dataset> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass> .

schema:Date a rdfs:Class,
        schema:DataType ;
    rdfs:label "Date" ;
    rdfs:comment "A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)." .

schema:DateTime a rdfs:Class,
        schema:DataType ;
    rdfs:label "DateTime" ;
    rdfs:comment "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601)." .

schema:DatedMoneySpecification a rdfs:Class ;
    rdfs:label "DatedMoneySpecification" ;
    rdfs:comment "A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended" ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:supersededBy schema:MonetaryAmount .

schema:DayOfWeek a rdfs:Class ;
    rdfs:label "DayOfWeek" ;
    rdfs:comment """The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.

Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
      """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:DaySpa a rdfs:Class ;
    rdfs:label "DaySpa" ;
    rdfs:comment "A day spa." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:DeactivateAction a rdfs:Class ;
    rdfs:label "DeactivateAction" ;
    rdfs:comment "The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight)." ;
    rdfs:subClassOf schema:ControlAction .

schema:DefenceEstablishment a rdfs:Class ;
    rdfs:label "DefenceEstablishment" ;
    rdfs:comment "A defence establishment, such as an army or navy base." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:DefinedRegion a rdfs:Class ;
    rdfs:label "DefinedRegion" ;
    rdfs:comment """A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.

Examples: a delivery destination when shopping. Region where regional pricing is configured.

Requirement 1:
Country: US
States: "NY", "CA"

Requirement 2:
Country: US
PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
{ [12345, 12345], [78945, 78945], }
Region = state, canton, prefecture, autonomous community...
""" ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:DefinedTerm a rdfs:Class ;
    rdfs:label "DefinedTerm" ;
    rdfs:comment "A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:DefinedTermSet a rdfs:Class ;
    rdfs:label "DefinedTermSet" ;
    rdfs:comment "A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:DeleteAction a rdfs:Class ;
    rdfs:label "DeleteAction" ;
    rdfs:comment "The act of editing a recipient by removing one of its objects." ;
    rdfs:subClassOf schema:UpdateAction .

schema:DeliveryChargeSpecification a rdfs:Class ;
    rdfs:label "DeliveryChargeSpecification" ;
    rdfs:comment "The price for the delivery of an offer using a particular delivery method." ;
    rdfs:subClassOf schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:DeliveryEvent a rdfs:Class ;
    rdfs:label "DeliveryEvent" ;
    rdfs:comment "An event involving the delivery of an item." ;
    rdfs:subClassOf schema:Event .

schema:DeliveryMethod a rdfs:Class ;
    rdfs:label "DeliveryMethod" ;
    rdfs:comment """A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\\\\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\\\\n* http://purl.org/goodrelations/v1#DeliveryModeMail\\\\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\\\\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\\\\n* http://purl.org/goodrelations/v1#DHL\\\\n* http://purl.org/goodrelations/v1#FederalExpress\\\\n* http://purl.org/goodrelations/v1#UPS
        """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:DeliveryTimeSettings a rdfs:Class ;
    rdfs:label "DeliveryTimeSettings" ;
    rdfs:comment "A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of a [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]]." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:Demand a rdfs:Class ;
    rdfs:label "Demand" ;
    rdfs:comment "A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:Dentist a rdfs:Class ;
    rdfs:label "Dentist" ;
    rdfs:comment "A dentist." ;
    rdfs:subClassOf schema:LocalBusiness,
        schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:DepartAction a rdfs:Class ;
    rdfs:label "DepartAction" ;
    rdfs:comment "The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:DepartmentStore a rdfs:Class ;
    rdfs:label "DepartmentStore" ;
    rdfs:comment "A department store." ;
    rdfs:subClassOf schema:Store .

schema:DepositAccount a rdfs:Class ;
    rdfs:label "DepositAccount" ;
    rdfs:comment "A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits." ;
    rdfs:subClassOf schema:BankAccount,
        schema:InvestmentOrDeposit ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:DiagnosticLab a rdfs:Class ;
    rdfs:label "DiagnosticLab" ;
    rdfs:comment "A medical laboratory that offers on-site or off-site diagnostic services." ;
    rdfs:subClassOf schema:MedicalOrganization ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DiagnosticProcedure a rdfs:Class ;
    rdfs:label "DiagnosticProcedure" ;
    rdfs:comment "A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes." ;
    rdfs:subClassOf schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Diet a rdfs:Class ;
    rdfs:label "Diet" ;
    rdfs:comment "A strategy of regulating the intake of food to achieve or maintain a specific health-related goal." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:LifestyleModification ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DietarySupplement a rdfs:Class ;
    rdfs:label "DietarySupplement" ;
    rdfs:comment "A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites." ;
    rdfs:subClassOf schema:Substance ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DigitalDocument a rdfs:Class ;
    rdfs:label "DigitalDocument" ;
    rdfs:comment "An electronic file or document." ;
    rdfs:subClassOf schema:CreativeWork .

schema:DigitalDocumentPermission a rdfs:Class ;
    rdfs:label "DigitalDocumentPermission" ;
    rdfs:comment "A permission for a particular person or group to access a particular file." ;
    rdfs:subClassOf schema:Intangible .

schema:DigitalDocumentPermissionType a rdfs:Class ;
    rdfs:label "DigitalDocumentPermissionType" ;
    rdfs:comment "A type of permission which can be granted for accessing a digital document." ;
    rdfs:subClassOf schema:Enumeration .

schema:DisagreeAction a rdfs:Class ;
    rdfs:label "DisagreeAction" ;
    rdfs:comment "The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:DiscoverAction a rdfs:Class ;
    rdfs:label "DiscoverAction" ;
    rdfs:comment "The act of discovering/finding an object." ;
    rdfs:subClassOf schema:FindAction .

schema:DiscussionForumPosting a rdfs:Class ;
    rdfs:label "DiscussionForumPosting" ;
    rdfs:comment "A posting to a discussion forum." ;
    rdfs:subClassOf schema:SocialMediaPosting .

schema:DislikeAction a rdfs:Class ;
    rdfs:label "DislikeAction" ;
    rdfs:comment "The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:Distance a rdfs:Class ;
    rdfs:label "Distance" ;
    rdfs:comment "Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'." ;
    rdfs:subClassOf schema:Quantity .

schema:Distillery a rdfs:Class ;
    rdfs:label "Distillery" ;
    rdfs:comment "A distillery." ;
    rdfs:subClassOf schema:FoodEstablishment ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/743> .

schema:DonateAction a rdfs:Class ;
    rdfs:label "DonateAction" ;
    rdfs:comment "The act of providing goods, services, or money without compensation, often for philanthropic reasons." ;
    rdfs:subClassOf schema:TradeAction .

schema:DoseSchedule a rdfs:Class ;
    rdfs:label "DoseSchedule" ;
    rdfs:comment "A specific dosing schedule for a drug or supplement." ;
    rdfs:subClassOf schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DownloadAction a rdfs:Class ;
    rdfs:label "DownloadAction" ;
    rdfs:comment "The act of downloading an object." ;
    rdfs:subClassOf schema:TransferAction .

schema:DrawAction a rdfs:Class ;
    rdfs:label "DrawAction" ;
    rdfs:comment "The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments." ;
    rdfs:subClassOf schema:CreateAction .

schema:Drawing a rdfs:Class ;
    rdfs:label "Drawing" ;
    rdfs:comment "A picture or diagram made with a pencil, pen, or crayon rather than paint." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1448> .

schema:DrinkAction a rdfs:Class ;
    rdfs:label "DrinkAction" ;
    rdfs:comment "The act of swallowing liquids." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:DriveWheelConfigurationValue a rdfs:Class ;
    rdfs:label "DriveWheelConfigurationValue" ;
    rdfs:comment "A value indicating which roadwheels will receive torque." ;
    rdfs:subClassOf schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Drug a rdfs:Class ;
    rdfs:label "Drug" ;
    rdfs:comment "A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them." ;
    rdfs:subClassOf schema:Substance ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/410942007> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugClass a rdfs:Class ;
    rdfs:label "DrugClass" ;
    rdfs:comment "A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugCost a rdfs:Class ;
    rdfs:label "DrugCost" ;
    rdfs:comment "The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugCostCategory a rdfs:Class ;
    rdfs:label "DrugCostCategory" ;
    rdfs:comment "Enumerated categories of medical drug costs." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugLegalStatus a rdfs:Class ;
    rdfs:label "DrugLegalStatus" ;
    rdfs:comment "The legal availability status of a medical drug." ;
    rdfs:subClassOf schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugPregnancyCategory a rdfs:Class ;
    rdfs:label "DrugPregnancyCategory" ;
    rdfs:comment "Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugPrescriptionStatus a rdfs:Class ;
    rdfs:label "DrugPrescriptionStatus" ;
    rdfs:comment "Indicates whether this drug is available by prescription or over-the-counter." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DrugStrength a rdfs:Class ;
    rdfs:label "DrugStrength" ;
    rdfs:comment "A specific strength in which a medical drug is available in a specific country." ;
    rdfs:subClassOf schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DryCleaningOrLaundry a rdfs:Class ;
    rdfs:label "DryCleaningOrLaundry" ;
    rdfs:comment "A dry-cleaning business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Duration a rdfs:Class ;
    rdfs:label "Duration" ;
    rdfs:comment "Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601))." ;
    rdfs:subClassOf schema:Quantity .

schema:EUEnergyEfficiencyEnumeration a rdfs:Class ;
    rdfs:label "EUEnergyEfficiencyEnumeration" ;
    rdfs:comment "Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369." ;
    rdfs:subClassOf schema:EnergyEfficiencyEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EatAction a rdfs:Class ;
    rdfs:label "EatAction" ;
    rdfs:comment "The act of swallowing solid objects." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:EducationEvent a rdfs:Class ;
    rdfs:label "EducationEvent" ;
    rdfs:comment "Event type: Education event." ;
    rdfs:subClassOf schema:Event .

schema:EducationalAudience a rdfs:Class ;
    rdfs:label "EducationalAudience" ;
    rdfs:comment "An EducationalAudience." ;
    rdfs:subClassOf schema:Audience ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass> .

schema:EducationalOccupationalCredential a rdfs:Class ;
    rdfs:label "EducationalOccupationalCredential" ;
    rdfs:comment "An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:EducationalOccupationalProgram a rdfs:Class ;
    rdfs:label "EducationalOccupationalProgram" ;
    rdfs:comment "A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree)." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:EducationalOrganization a rdfs:Class ;
    rdfs:label "EducationalOrganization" ;
    rdfs:comment "An educational organization." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:Organization .

schema:Electrician a rdfs:Class ;
    rdfs:label "Electrician" ;
    rdfs:comment "An electrician." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:ElectronicsStore a rdfs:Class ;
    rdfs:label "ElectronicsStore" ;
    rdfs:comment "An electronics store." ;
    rdfs:subClassOf schema:Store .

schema:ElementarySchool a rdfs:Class ;
    rdfs:label "ElementarySchool" ;
    rdfs:comment "An elementary school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:EmailMessage a rdfs:Class ;
    rdfs:label "EmailMessage" ;
    rdfs:comment "An email message." ;
    rdfs:subClassOf schema:Message .

schema:Embassy a rdfs:Class ;
    rdfs:label "Embassy" ;
    rdfs:comment "An embassy." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:EmergencyService a rdfs:Class ;
    rdfs:label "EmergencyService" ;
    rdfs:comment "An emergency service, such as a fire station or ER." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EmployeeRole a rdfs:Class ;
    rdfs:label "EmployeeRole" ;
    rdfs:comment "A subclass of OrganizationRole used to describe employee relationships." ;
    rdfs:subClassOf schema:OrganizationRole .

schema:EmployerAggregateRating a rdfs:Class ;
    rdfs:label "EmployerAggregateRating" ;
    rdfs:comment "An aggregate rating of an Organization related to its role as an employer." ;
    rdfs:subClassOf schema:AggregateRating ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1689> .

schema:EmployerReview a rdfs:Class ;
    rdfs:label "EmployerReview" ;
    rdfs:comment "An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or former employee of that organization." ;
    rdfs:subClassOf schema:Review ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1589> .

schema:EmploymentAgency a rdfs:Class ;
    rdfs:label "EmploymentAgency" ;
    rdfs:comment "An employment agency." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EndorseAction a rdfs:Class ;
    rdfs:label "EndorseAction" ;
    rdfs:comment "An agent approves/certifies/likes/supports/sanction an object." ;
    rdfs:subClassOf schema:ReactAction .

schema:EndorsementRating a rdfs:Class ;
    rdfs:label "EndorsementRating" ;
    rdfs:comment """An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a
"Like" or "+1" on a social network. It can be considered the [[result]] of an [[EndorseAction]] in which the [[object]] of the action is rated positively by
some [[agent]]. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the [[Action]].

An [[EndorsementRating]] may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,
endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.
""" ;
    rdfs:subClassOf schema:Rating ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1293> .

schema:Energy a rdfs:Class ;
    rdfs:label "Energy" ;
    rdfs:comment "Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'." ;
    rdfs:subClassOf schema:Quantity .

schema:EnergyConsumptionDetails a rdfs:Class ;
    rdfs:label "EnergyConsumptionDetails" ;
    rdfs:comment "EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EnergyEfficiencyEnumeration a rdfs:Class ;
    rdfs:label "EnergyEfficiencyEnumeration" ;
    rdfs:comment "Enumerates energy efficiency levels (also known as \\"classes\\" or \\"ratings\\") and certifications that are part of several international energy efficiency standards." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EnergyStarEnergyEfficiencyEnumeration a rdfs:Class ;
    rdfs:label "EnergyStarEnergyEfficiencyEnumeration" ;
    rdfs:comment "Used to indicate whether a product is EnergyStar certified." ;
    rdfs:subClassOf schema:EnergyEfficiencyEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EngineSpecification a rdfs:Class ;
    rdfs:label "EngineSpecification" ;
    rdfs:comment "Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:EntertainmentBusiness a rdfs:Class ;
    rdfs:label "EntertainmentBusiness" ;
    rdfs:comment "A business providing entertainment." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:EntryPoint a rdfs:Class ;
    rdfs:label "EntryPoint" ;
    rdfs:comment "An entry point, within some Web-based protocol." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> .

schema:Enumeration a rdfs:Class ;
    rdfs:label "Enumeration" ;
    rdfs:comment "Lists or enumerationsâ€”for example, a list of cuisines or music genres, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:Episode a rdfs:Class ;
    rdfs:label "Episode" ;
    rdfs:comment "A media episode (e.g. TV, radio, video game) which can be part of a series or season." ;
    rdfs:subClassOf schema:CreativeWork .

schema:Event a rdfs:Class ;
    rdfs:label "Event" ;
    rdfs:comment "An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects." ;
    rdfs:subClassOf schema:Thing ;
    ns2:equivalentClass <http://purl.org/dc/dcmitype/Event> .

schema:EventAttendanceModeEnumeration a rdfs:Class ;
    rdfs:label "EventAttendanceModeEnumeration" ;
    rdfs:comment "An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:EventReservation a rdfs:Class ;
    rdfs:label "EventReservation" ;
    rdfs:comment "A reservation for an event like a concert, sporting event, or lecture.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]." ;
    rdfs:subClassOf schema:Reservation .

schema:EventSeries a rdfs:Class ;
    rdfs:label "EventSeries" ;
    rdfs:comment """A series of [[Event]]s. Included events can relate with the series using the [[superEvent]] property.

An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which
is repeated regularly. The "2012 London Olympics" can be presented both as an [[Event]] in the series "Olympic Games", and as an
[[EventSeries]] that included a number of sporting competitions as Events.

The nature of the association between the events in an [[EventSeries]] can vary, but typical examples could
include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.

EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without
worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries
may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but
it may also sometimes prove useful to describe a longer-term series as an Event.
   """ ;
    rdfs:subClassOf schema:Event,
        schema:Series ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/447> .

schema:EventStatusType a rdfs:Class ;
    rdfs:label "EventStatusType" ;
    rdfs:comment "EventStatusType is an enumeration type whose instances represent several states that an Event may be in." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:EventVenue a rdfs:Class ;
    rdfs:label "EventVenue" ;
    rdfs:comment "An event venue." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ExchangeRateSpecification a rdfs:Class ;
    rdfs:label "ExchangeRateSpecification" ;
    rdfs:comment "A structured value representing exchange rate." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:ExerciseAction a rdfs:Class ;
    rdfs:label "ExerciseAction" ;
    rdfs:comment "The act of participating in exertive activity for the purposes of improving health and fitness." ;
    rdfs:subClassOf schema:PlayAction .

schema:ExerciseGym a rdfs:Class ;
    rdfs:label "ExerciseGym" ;
    rdfs:comment "A gym." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:ExercisePlan a rdfs:Class ;
    rdfs:label "ExercisePlan" ;
    rdfs:comment "Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:PhysicalActivity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ExhibitionEvent a rdfs:Class ;
    rdfs:label "ExhibitionEvent" ;
    rdfs:comment "Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ..." ;
    rdfs:subClassOf schema:Event .

schema:FAQPage a rdfs:Class ;
    rdfs:label "FAQPage" ;
    rdfs:comment "A [[FAQPage]] is a [[WebPage]] presenting one or more \\"[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)\\" (see also [[QAPage]])." ;
    rdfs:subClassOf schema:WebPage ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1723> .

schema:FMRadioChannel a rdfs:Class ;
    rdfs:label "FMRadioChannel" ;
    rdfs:comment "A radio channel that uses FM." ;
    rdfs:subClassOf schema:RadioChannel ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:FastFoodRestaurant a rdfs:Class ;
    rdfs:label "FastFoodRestaurant" ;
    rdfs:comment "A fast-food restaurant." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:Festival a rdfs:Class ;
    rdfs:label "Festival" ;
    rdfs:comment "Event type: Festival." ;
    rdfs:subClassOf schema:Event .

schema:FilmAction a rdfs:Class ;
    rdfs:label "FilmAction" ;
    rdfs:comment "The act of capturing sound and moving images on film, video, or digitally." ;
    rdfs:subClassOf schema:CreateAction .

schema:FinancialProduct a rdfs:Class ;
    rdfs:label "FinancialProduct" ;
    rdfs:comment "A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry." ;
    rdfs:subClassOf schema:Service ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:FinancialService a rdfs:Class ;
    rdfs:label "FinancialService" ;
    rdfs:comment "Financial services business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:FindAction a rdfs:Class ;
    rdfs:label "FindAction" ;
    rdfs:comment "The act of finding an object.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily." ;
    rdfs:subClassOf schema:Action .

schema:FireStation a rdfs:Class ;
    rdfs:label "FireStation" ;
    rdfs:comment "A fire station. With firemen." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService .

schema:Flight a rdfs:Class ;
    rdfs:label "Flight" ;
    rdfs:comment "An airline flight." ;
    rdfs:subClassOf schema:Trip .

schema:FlightReservation a rdfs:Class ;
    rdfs:label "FlightReservation" ;
    rdfs:comment "A reservation for air travel.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]." ;
    rdfs:subClassOf schema:Reservation .

schema:Float a rdfs:Class ;
    rdfs:label "Float" ;
    rdfs:comment "Data type: Floating number." ;
    rdfs:subClassOf schema:Number .

schema:FloorPlan a rdfs:Class ;
    rdfs:label "FloorPlan" ;
    rdfs:comment "A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]]. " ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:Florist a rdfs:Class ;
    rdfs:label "Florist" ;
    rdfs:comment "A florist." ;
    rdfs:subClassOf schema:Store .

schema:FollowAction a rdfs:Class ;
    rdfs:label "FollowAction" ;
    rdfs:comment "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\\\\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\\\\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\\\\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\\\\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it)." ;
    rdfs:subClassOf schema:InteractAction .

schema:FoodEstablishment a rdfs:Class ;
    rdfs:label "FoodEstablishment" ;
    rdfs:comment "A food-related business." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:FoodEstablishmentReservation a rdfs:Class ;
    rdfs:label "FoodEstablishmentReservation" ;
    rdfs:comment "A reservation to dine at a food-related business.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations." ;
    rdfs:subClassOf schema:Reservation .

schema:FoodEvent a rdfs:Class ;
    rdfs:label "FoodEvent" ;
    rdfs:comment "Event type: Food event." ;
    rdfs:subClassOf schema:Event .

schema:FoodService a rdfs:Class ;
    rdfs:label "FoodService" ;
    rdfs:comment "A food service, like breakfast, lunch, or dinner." ;
    rdfs:subClassOf schema:Service ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:FundingAgency a rdfs:Class ;
    rdfs:label "FundingAgency" ;
    rdfs:comment """A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages
    the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s).
    A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
    
Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...
    """ ;
    rdfs:subClassOf schema:Project ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:FundingScheme a rdfs:Class ;
    rdfs:label "FundingScheme" ;
    rdfs:comment """A FundingScheme combines organizational, project and policy aspects of grant-based funding
    that sets guidelines, principles and mechanisms to support other kinds of projects and activities.
    Funding is typically organized via [[Grant]] funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - [[FundingAgency]]s such as ERC, REA, ...""" ;
    rdfs:subClassOf schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:FurnitureStore a rdfs:Class ;
    rdfs:label "FurnitureStore" ;
    rdfs:comment "A furniture store." ;
    rdfs:subClassOf schema:Store .

schema:Game a rdfs:Class ;
    rdfs:label "Game" ;
    rdfs:comment "The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting." ;
    rdfs:subClassOf schema:CreativeWork .

schema:GamePlayMode a rdfs:Class ;
    rdfs:label "GamePlayMode" ;
    rdfs:comment "Indicates whether this game is multi-player, co-op or single-player." ;
    rdfs:subClassOf schema:Enumeration .

schema:GameServer a rdfs:Class ;
    rdfs:label "GameServer" ;
    rdfs:comment "Server that provides game interaction in a multiplayer game." ;
    rdfs:subClassOf schema:Intangible .

schema:GameServerStatus a rdfs:Class ;
    rdfs:label "GameServerStatus" ;
    rdfs:comment "Status of a game server." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:GardenStore a rdfs:Class ;
    rdfs:label "GardenStore" ;
    rdfs:comment "A garden store." ;
    rdfs:subClassOf schema:Store .

schema:GasStation a rdfs:Class ;
    rdfs:label "GasStation" ;
    rdfs:comment "A gas station." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:GatedResidenceCommunity a rdfs:Class ;
    rdfs:label "GatedResidenceCommunity" ;
    rdfs:comment "Residence type: Gated community." ;
    rdfs:subClassOf schema:Residence .

schema:GenderType a rdfs:Class ;
    rdfs:label "GenderType" ;
    rdfs:comment "An enumeration of genders." ;
    rdfs:subClassOf schema:Enumeration .

schema:GeneralContractor a rdfs:Class ;
    rdfs:label "GeneralContractor" ;
    rdfs:comment "A general contractor." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:GeoCircle a rdfs:Class ;
    rdfs:label "GeoCircle" ;
    rdfs:comment """A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
          it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
          The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
       """ ;
    rdfs:subClassOf schema:GeoShape .

schema:GeoCoordinates a rdfs:Class ;
    rdfs:label "GeoCoordinates" ;
    rdfs:comment "The geographic coordinates of a place or event." ;
    rdfs:subClassOf schema:StructuredValue .

schema:GeoShape a rdfs:Class ;
    rdfs:label "GeoShape" ;
    rdfs:comment "The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:GeospatialGeometry a rdfs:Class ;
    rdfs:label "GeospatialGeometry" ;
    rdfs:comment "(Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1375> .

schema:GiveAction a rdfs:Class ;
    rdfs:label "GiveAction" ;
    rdfs:comment "The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[TakeAction]]: Reciprocal of GiveAction.\\\\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you)." ;
    rdfs:subClassOf schema:TransferAction .

schema:GolfCourse a rdfs:Class ;
    rdfs:label "GolfCourse" ;
    rdfs:comment "A golf course." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:GovernmentBenefitsType a rdfs:Class ;
    rdfs:label "GovernmentBenefitsType" ;
    rdfs:comment "GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:GovernmentBuilding a rdfs:Class ;
    rdfs:label "GovernmentBuilding" ;
    rdfs:comment "A government building." ;
    rdfs:subClassOf schema:CivicStructure .

schema:GovernmentOffice a rdfs:Class ;
    rdfs:label "GovernmentOffice" ;
    rdfs:comment "A government office&#x2014;for example, an IRS or DMV office." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:GovernmentOrganization a rdfs:Class ;
    rdfs:label "GovernmentOrganization" ;
    rdfs:comment "A governmental organization or agency." ;
    rdfs:subClassOf schema:Organization .

schema:GovernmentPermit a rdfs:Class ;
    rdfs:label "GovernmentPermit" ;
    rdfs:comment "A permit issued by a government agency." ;
    rdfs:subClassOf schema:Permit .

schema:GovernmentService a rdfs:Class ;
    rdfs:label "GovernmentService" ;
    rdfs:comment "A service provided by a government organization, e.g. food stamps, veterans benefits, etc." ;
    rdfs:subClassOf schema:Service .

schema:Grant a rdfs:Class ;
    rdfs:label "Grant" ;
    rdfs:comment """A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
    sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).

Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.

The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
    """ ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:GroceryStore a rdfs:Class ;
    rdfs:label "GroceryStore" ;
    rdfs:comment "A grocery store." ;
    rdfs:subClassOf schema:Store .

schema:Guide a rdfs:Class ;
    rdfs:label "Guide" ;
    rdfs:comment "[[Guide]] is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2405> .

schema:HVACBusiness a rdfs:Class ;
    rdfs:label "HVACBusiness" ;
    rdfs:comment "A business that provide Heating, Ventilation and Air Conditioning services." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:Hackathon a rdfs:Class ;
    rdfs:label "Hackathon" ;
    rdfs:comment "A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event." ;
    rdfs:subClassOf schema:Event ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2526> .

schema:HairSalon a rdfs:Class ;
    rdfs:label "HairSalon" ;
    rdfs:comment "A hair salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:HardwareStore a rdfs:Class ;
    rdfs:label "HardwareStore" ;
    rdfs:comment "A hardware store." ;
    rdfs:subClassOf schema:Store .

schema:HealthAndBeautyBusiness a rdfs:Class ;
    rdfs:label "HealthAndBeautyBusiness" ;
    rdfs:comment "Health and beauty." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:HealthAspectEnumeration a rdfs:Class ;
    rdfs:label "HealthAspectEnumeration" ;
    rdfs:comment "HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]]." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:HealthClub a rdfs:Class ;
    rdfs:label "HealthClub" ;
    rdfs:comment "A health club." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness,
        schema:SportsActivityLocation .

schema:HealthInsurancePlan a rdfs:Class ;
    rdfs:label "HealthInsurancePlan" ;
    rdfs:comment "A US-style health insurance plan, including PPOs, EPOs, and HMOs. " ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:HealthPlanCostSharingSpecification a rdfs:Class ;
    rdfs:label "HealthPlanCostSharingSpecification" ;
    rdfs:comment "A description of costs to the patient under a given network or formulary." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:HealthPlanFormulary a rdfs:Class ;
    rdfs:label "HealthPlanFormulary" ;
    rdfs:comment "For a given health insurance plan, the specification for costs and coverage of prescription drugs. " ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:HealthPlanNetwork a rdfs:Class ;
    rdfs:label "HealthPlanNetwork" ;
    rdfs:comment "A US-style health insurance plan network. " ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:HealthTopicContent a rdfs:Class ;
    rdfs:label "HealthTopicContent" ;
    rdfs:comment """[[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
  """ ;
    rdfs:subClassOf schema:WebContent ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:HighSchool a rdfs:Class ;
    rdfs:label "HighSchool" ;
    rdfs:comment "A high school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:HinduTemple a rdfs:Class ;
    rdfs:label "HinduTemple" ;
    rdfs:comment "A Hindu temple." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:HobbyShop a rdfs:Class ;
    rdfs:label "HobbyShop" ;
    rdfs:comment "A store that sells materials useful or necessary for various hobbies." ;
    rdfs:subClassOf schema:Store .

schema:HomeAndConstructionBusiness a rdfs:Class ;
    rdfs:label "HomeAndConstructionBusiness" ;
    rdfs:comment "A construction business.\\\\n\\\\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\\\\n\\\\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\\\\(s)." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:HomeGoodsStore a rdfs:Class ;
    rdfs:label "HomeGoodsStore" ;
    rdfs:comment "A home goods store." ;
    rdfs:subClassOf schema:Store .

schema:Hospital a rdfs:Class ;
    rdfs:label "Hospital" ;
    rdfs:comment "A hospital." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService,
        schema:MedicalOrganization .

schema:Hostel a rdfs:Class ;
    rdfs:label "Hostel" ;
    rdfs:comment """A hostel - cheap accommodation, often in shared dormitories.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:Hotel a rdfs:Class ;
    rdfs:label "Hotel" ;
    rdfs:comment """A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:LodgingBusiness ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:HotelRoom a rdfs:Class ;
    rdfs:label "HotelRoom" ;
    rdfs:comment """A hotel room is a single room in a hotel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:Room ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:House a rdfs:Class ;
    rdfs:label "House" ;
    rdfs:comment "A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href=\\"http://en.wikipedia.org/wiki/House\\">http://en.wikipedia.org/wiki/House</a>)." ;
    rdfs:subClassOf schema:Accommodation ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:HousePainter a rdfs:Class ;
    rdfs:label "HousePainter" ;
    rdfs:comment "A house painting service." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:HowTo a rdfs:Class ;
    rdfs:label "HowTo" ;
    rdfs:comment "Instructions that explain how to achieve a result by performing a sequence of steps." ;
    rdfs:subClassOf schema:CreativeWork .

schema:HowToDirection a rdfs:Class ;
    rdfs:label "HowToDirection" ;
    rdfs:comment "A direction indicating a single action to do in the instructions for how to achieve a result." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ListItem .

schema:HowToItem a rdfs:Class ;
    rdfs:label "HowToItem" ;
    rdfs:comment "An item used as either a tool or supply when performing the instructions for how to to achieve a result." ;
    rdfs:subClassOf schema:ListItem .

schema:HowToSection a rdfs:Class ;
    rdfs:label "HowToSection" ;
    rdfs:comment "A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe)." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ItemList,
        schema:ListItem .

schema:HowToStep a rdfs:Class ;
    rdfs:label "HowToStep" ;
    rdfs:comment "A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ItemList,
        schema:ListItem .

schema:HowToSupply a rdfs:Class ;
    rdfs:label "HowToSupply" ;
    rdfs:comment "A supply consumed when performing the instructions for how to achieve a result." ;
    rdfs:subClassOf schema:HowToItem .

schema:HowToTip a rdfs:Class ;
    rdfs:label "HowToTip" ;
    rdfs:comment "An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection)." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:ListItem .

schema:HowToTool a rdfs:Class ;
    rdfs:label "HowToTool" ;
    rdfs:comment "A tool used (but not consumed) when performing instructions for how to achieve a result." ;
    rdfs:subClassOf schema:HowToItem .

schema:HyperToc a rdfs:Class ;
    rdfs:label "HyperToc" ;
    rdfs:comment "A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2766> .

schema:HyperTocEntry a rdfs:Class ;
    rdfs:label "HyperTocEntry" ;
    rdfs:comment "A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]]." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2766> .

schema:IceCreamShop a rdfs:Class ;
    rdfs:label "IceCreamShop" ;
    rdfs:comment "An ice cream shop." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:IgnoreAction a rdfs:Class ;
    rdfs:label "IgnoreAction" ;
    rdfs:comment "The act of intentionally disregarding the object. An agent ignores an object." ;
    rdfs:subClassOf schema:AssessAction .

schema:ImageGallery a rdfs:Class ;
    rdfs:label "ImageGallery" ;
    rdfs:comment "Web page type: Image gallery page." ;
    rdfs:subClassOf schema:MediaGallery .

schema:ImageObject a rdfs:Class ;
    rdfs:label "ImageObject" ;
    rdfs:comment "An image file." ;
    rdfs:subClassOf schema:MediaObject ;
    ns2:equivalentClass <http://purl.org/dc/dcmitype/Image> .

schema:ImagingTest a rdfs:Class ;
    rdfs:label "ImagingTest" ;
    rdfs:comment "Any medical imaging modality typically used for diagnostic purposes." ;
    rdfs:subClassOf schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:IndividualProduct a rdfs:Class ;
    rdfs:label "IndividualProduct" ;
    rdfs:comment "A single, identifiable product instance (e.g. a laptop with a particular serial number)." ;
    rdfs:subClassOf schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:InfectiousAgentClass a rdfs:Class ;
    rdfs:label "InfectiousAgentClass" ;
    rdfs:comment "Classes of agents or pathogens that transmit infectious diseases. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:InfectiousDisease a rdfs:Class ;
    rdfs:label "InfectiousDisease" ;
    rdfs:comment "An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease." ;
    rdfs:subClassOf schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:InformAction a rdfs:Class ;
    rdfs:label "InformAction" ;
    rdfs:comment "The act of notifying someone of information pertinent to them, with no expectation of a response." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:InsertAction a rdfs:Class ;
    rdfs:label "InsertAction" ;
    rdfs:comment "The act of adding at a specific location in an ordered collection." ;
    rdfs:subClassOf schema:AddAction .

schema:InstallAction a rdfs:Class ;
    rdfs:label "InstallAction" ;
    rdfs:comment "The act of installing an application." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:InsuranceAgency a rdfs:Class ;
    rdfs:label "InsuranceAgency" ;
    rdfs:comment "An Insurance agency." ;
    rdfs:subClassOf schema:FinancialService .

schema:Intangible a rdfs:Class ;
    rdfs:label "Intangible" ;
    rdfs:comment "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc." ;
    rdfs:subClassOf schema:Thing .

schema:Integer a rdfs:Class ;
    rdfs:label "Integer" ;
    rdfs:comment "Data type: Integer." ;
    rdfs:subClassOf schema:Number .

schema:InteractAction a rdfs:Class ;
    rdfs:label "InteractAction" ;
    rdfs:comment "The act of interacting with another person or organization." ;
    rdfs:subClassOf schema:Action .

schema:InteractionCounter a rdfs:Class ;
    rdfs:label "InteractionCounter" ;
    rdfs:comment "A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction." ;
    rdfs:subClassOf schema:StructuredValue .

schema:InternetCafe a rdfs:Class ;
    rdfs:label "InternetCafe" ;
    rdfs:comment "An internet cafe." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:InvestmentFund a rdfs:Class ;
    rdfs:label "InvestmentFund" ;
    rdfs:comment "A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets." ;
    rdfs:subClassOf schema:InvestmentOrDeposit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:InvestmentOrDeposit a rdfs:Class ;
    rdfs:label "InvestmentOrDeposit" ;
    rdfs:comment "A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return." ;
    rdfs:subClassOf schema:FinancialProduct ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:InviteAction a rdfs:Class ;
    rdfs:label "InviteAction" ;
    rdfs:comment "The act of asking someone to attend an event. Reciprocal of RsvpAction." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:Invoice a rdfs:Class ;
    rdfs:label "Invoice" ;
    rdfs:comment "A statement of the money due for goods or services; a bill." ;
    rdfs:subClassOf schema:Intangible .

schema:ItemAvailability a rdfs:Class ;
    rdfs:label "ItemAvailability" ;
    rdfs:comment "A list of possible product availability options." ;
    rdfs:subClassOf schema:Enumeration .

schema:ItemList a rdfs:Class ;
    rdfs:label "ItemList" ;
    rdfs:comment "A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting." ;
    rdfs:subClassOf schema:Intangible .

schema:ItemListOrderType a rdfs:Class ;
    rdfs:label "ItemListOrderType" ;
    rdfs:comment "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized." ;
    rdfs:subClassOf schema:Enumeration .

schema:ItemPage a rdfs:Class ;
    rdfs:label "ItemPage" ;
    rdfs:comment "A page devoted to a single item, such as a particular product or hotel." ;
    rdfs:subClassOf schema:WebPage .

schema:JewelryStore a rdfs:Class ;
    rdfs:label "JewelryStore" ;
    rdfs:comment "A jewelry store." ;
    rdfs:subClassOf schema:Store .

schema:JobPosting a rdfs:Class ;
    rdfs:label "JobPosting" ;
    rdfs:comment "A listing that describes a job opening in a certain organization." ;
    rdfs:subClassOf schema:Intangible .

schema:JoinAction a rdfs:Class ;
    rdfs:label "JoinAction" ;
    rdfs:comment "An agent joins an event/group with participants/friends at a location.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\\\\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\\\\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates." ;
    rdfs:subClassOf schema:InteractAction .

schema:Joint a rdfs:Class ;
    rdfs:label "Joint" ;
    rdfs:comment "The anatomical location at which two or more bones make contact." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:LakeBodyOfWater a rdfs:Class ;
    rdfs:label "LakeBodyOfWater" ;
    rdfs:comment "A lake (for example, Lake Pontrachain)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Landform a rdfs:Class ;
    rdfs:label "Landform" ;
    rdfs:comment "A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins." ;
    rdfs:subClassOf schema:Place .

schema:LandmarksOrHistoricalBuildings a rdfs:Class ;
    rdfs:label "LandmarksOrHistoricalBuildings" ;
    rdfs:comment "An historical landmark or building." ;
    rdfs:subClassOf schema:Place .

schema:Language a rdfs:Class ;
    rdfs:label "Language" ;
    rdfs:comment "Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]]." ;
    rdfs:subClassOf schema:Intangible .

schema:LearningResource a rdfs:Class ;
    rdfs:label "LearningResource" ;
    rdfs:comment """The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.

[[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.

[[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.""" ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1401> .

schema:LeaveAction a rdfs:Class ;
    rdfs:label "LeaveAction" ;
    rdfs:comment "An agent leaves an event / group with participants/friends at a location.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[JoinAction]]: The antonym of LeaveAction.\\\\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service." ;
    rdfs:subClassOf schema:InteractAction .

schema:LegalForceStatus a rdfs:Class ;
    rdfs:label "LegalForceStatus" ;
    rdfs:comment "A list of possible statuses for the legal force of a legislation." ;
    rdfs:subClassOf schema:StatusEnumeration ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#InForce> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:LegalService a rdfs:Class ;
    rdfs:label "LegalService" ;
    rdfs:comment "A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\\\\n\\\\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\\\\(s)." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LegalValueLevel a rdfs:Class ;
    rdfs:label "LegalValueLevel" ;
    rdfs:comment "A list of possible levels for the legal validity of a legislation." ;
    rdfs:subClassOf schema:Enumeration ;
    ns1:closeMatch <http://data.europa.eu/eli/ontology#LegalValue> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:Legislation a rdfs:Class ;
    rdfs:label "Legislation" ;
    rdfs:comment "A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article)." ;
    rdfs:subClassOf schema:CreativeWork ;
    ns1:closeMatch <http://data.europa.eu/eli/ontology#LegalExpression>,
        <http://data.europa.eu/eli/ontology#LegalResource> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:LegislationObject a rdfs:Class ;
    rdfs:label "LegislationObject" ;
    rdfs:comment "A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version." ;
    rdfs:subClassOf schema:Legislation,
        schema:MediaObject ;
    ns1:closeMatch <http://data.europa.eu/eli/ontology#Format> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:LegislativeBuilding a rdfs:Class ;
    rdfs:label "LegislativeBuilding" ;
    rdfs:comment "A legislative building&#x2014;for example, the state capitol." ;
    rdfs:subClassOf schema:GovernmentBuilding .

schema:LendAction a rdfs:Class ;
    rdfs:label "LendAction" ;
    rdfs:comment "The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[BorrowAction]]: Reciprocal of LendAction." ;
    rdfs:subClassOf schema:TransferAction .

schema:Library a rdfs:Class ;
    rdfs:label "Library" ;
    rdfs:comment "A library." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LibrarySystem a rdfs:Class ;
    rdfs:label "LibrarySystem" ;
    rdfs:comment "A [[LibrarySystem]] is a collaborative system amongst several libraries." ;
    rdfs:subClassOf schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1495> .

schema:LifestyleModification a rdfs:Class ;
    rdfs:label "LifestyleModification" ;
    rdfs:comment "A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Ligament a rdfs:Class ;
    rdfs:label "Ligament" ;
    rdfs:comment "A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:LikeAction a rdfs:Class ;
    rdfs:label "LikeAction" ;
    rdfs:comment "The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants." ;
    rdfs:subClassOf schema:ReactAction .

schema:LinkRole a rdfs:Class ;
    rdfs:label "LinkRole" ;
    rdfs:comment "A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds." ;
    rdfs:subClassOf schema:Role ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1045> .

schema:LiquorStore a rdfs:Class ;
    rdfs:label "LiquorStore" ;
    rdfs:comment "A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits." ;
    rdfs:subClassOf schema:Store .

schema:ListItem a rdfs:Class ;
    rdfs:label "ListItem" ;
    rdfs:comment "An list item, e.g. a step in a checklist or how-to description." ;
    rdfs:subClassOf schema:Intangible .

schema:ListenAction a rdfs:Class ;
    rdfs:label "ListenAction" ;
    rdfs:comment "The act of consuming audio content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:LiteraryEvent a rdfs:Class ;
    rdfs:label "LiteraryEvent" ;
    rdfs:comment "Event type: Literary event." ;
    rdfs:subClassOf schema:Event .

schema:LiveBlogPosting a rdfs:Class ;
    rdfs:label "LiveBlogPosting" ;
    rdfs:comment "A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates." ;
    rdfs:subClassOf schema:BlogPosting .

schema:LoanOrCredit a rdfs:Class ;
    rdfs:label "LoanOrCredit" ;
    rdfs:comment "A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges." ;
    rdfs:subClassOf schema:FinancialProduct ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:LocalBusiness a rdfs:Class ;
    rdfs:label "LocalBusiness" ;
    rdfs:comment "A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc." ;
    rdfs:subClassOf schema:Organization,
        schema:Place ;
    ns1:closeMatch <http://www.w3.org/ns/regorg#RegisteredOrganization> .

schema:LocationFeatureSpecification a rdfs:Class ;
    rdfs:label "LocationFeatureSpecification" ;
    rdfs:comment "Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality." ;
    rdfs:subClassOf schema:PropertyValue ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:Locksmith a rdfs:Class ;
    rdfs:label "Locksmith" ;
    rdfs:comment "A locksmith." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:LodgingBusiness a rdfs:Class ;
    rdfs:label "LodgingBusiness" ;
    rdfs:comment "A lodging business, such as a motel, hotel, or inn." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:LodgingReservation a rdfs:Class ;
    rdfs:label "LodgingReservation" ;
    rdfs:comment "A reservation for lodging at a hotel, motel, inn, etc.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations." ;
    rdfs:subClassOf schema:Reservation .

schema:LoseAction a rdfs:Class ;
    rdfs:label "LoseAction" ;
    rdfs:comment "The act of being defeated in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:LymphaticVessel a rdfs:Class ;
    rdfs:label "LymphaticVessel" ;
    rdfs:comment "A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart." ;
    rdfs:subClassOf schema:Vessel ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Manuscript a rdfs:Class ;
    rdfs:label "Manuscript" ;
    rdfs:comment "A book, document, or piece of music written by hand rather than typed or printed." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1448> .

schema:Map a rdfs:Class ;
    rdfs:label "Map" ;
    rdfs:comment "A map." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MapCategoryType a rdfs:Class ;
    rdfs:label "MapCategoryType" ;
    rdfs:comment "An enumeration of several kinds of Map." ;
    rdfs:subClassOf schema:Enumeration .

schema:MarryAction a rdfs:Class ;
    rdfs:label "MarryAction" ;
    rdfs:comment "The act of marrying a person." ;
    rdfs:subClassOf schema:InteractAction .

schema:Mass a rdfs:Class ;
    rdfs:label "Mass" ;
    rdfs:comment "Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'." ;
    rdfs:subClassOf schema:Quantity .

schema:MathSolver a rdfs:Class ;
    rdfs:label "MathSolver" ;
    rdfs:comment "A math solver which is capable of solving a subset of mathematical problems." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2740> .

schema:MaximumDoseSchedule a rdfs:Class ;
    rdfs:label "MaximumDoseSchedule" ;
    rdfs:comment "The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity." ;
    rdfs:subClassOf schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MeasurementTypeEnumeration a rdfs:Class ;
    rdfs:label "MeasurementTypeEnumeration" ;
    rdfs:comment "Enumeration of common measurement types (or dimensions), for example \\"chest\\" for a person, \\"inseam\\" for pants, \\"gauge\\" for screws, or \\"wheel\\" for bicycles." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:MediaGallery a rdfs:Class ;
    rdfs:label "MediaGallery" ;
    rdfs:comment "Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia." ;
    rdfs:subClassOf schema:CollectionPage .

schema:MediaManipulationRatingEnumeration a rdfs:Class ;
    rdfs:label "MediaManipulationRatingEnumeration" ;
    rdfs:comment " Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:MediaObject a rdfs:Class ;
    rdfs:label "MediaObject" ;
    rdfs:comment "A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's)." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MediaReview a rdfs:Class ;
    rdfs:label "MediaReview" ;
    rdfs:comment """A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
    For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
    a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
    to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup has not yet been finalized.""" ;
    rdfs:subClassOf schema:Review ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:MediaSubscription a rdfs:Class ;
    rdfs:label "MediaSubscription" ;
    rdfs:comment "A subscription which allows a user to access media including audio, video, books, etc." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:MedicalAudience a rdfs:Class ;
    rdfs:label "MedicalAudience" ;
    rdfs:comment "Target audiences for medical web pages." ;
    rdfs:subClassOf schema:Audience,
        schema:PeopleAudience ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalAudienceType a rdfs:Class ;
    rdfs:label "MedicalAudienceType" ;
    rdfs:comment "Target audiences types for medical web pages. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalBusiness a rdfs:Class ;
    rdfs:label "MedicalBusiness" ;
    rdfs:comment "A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals." ;
    rdfs:subClassOf schema:LocalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalCause a rdfs:Class ;
    rdfs:label "MedicalCause" ;
    rdfs:comment "The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalClinic a rdfs:Class ;
    rdfs:label "MedicalClinic" ;
    rdfs:comment "A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well." ;
    rdfs:subClassOf schema:MedicalBusiness,
        schema:MedicalOrganization ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalCode a rdfs:Class ;
    rdfs:label "MedicalCode" ;
    rdfs:comment "A code for a medical entity." ;
    rdfs:subClassOf schema:CategoryCode,
        schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalCondition a rdfs:Class ;
    rdfs:label "MedicalCondition" ;
    rdfs:comment "Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalConditionStage a rdfs:Class ;
    rdfs:label "MedicalConditionStage" ;
    rdfs:comment "A stage of a medical condition, such as 'Stage IIIa'." ;
    rdfs:subClassOf schema:MedicalIntangible ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalContraindication a rdfs:Class ;
    rdfs:label "MedicalContraindication" ;
    rdfs:comment "A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures)." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalDevice a rdfs:Class ;
    rdfs:label "MedicalDevice" ;
    rdfs:comment "Any object used in a medical capacity, such as to diagnose or treat a patient." ;
    rdfs:subClassOf schema:MedicalEntity ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/63653004> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalDevicePurpose a rdfs:Class ;
    rdfs:label "MedicalDevicePurpose" ;
    rdfs:comment "Categories of medical devices, organized by the purpose or intended use of the device." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalEntity a rdfs:Class ;
    rdfs:label "MedicalEntity" ;
    rdfs:comment "The most generic type of entity related to health and the practice of medicine." ;
    rdfs:subClassOf schema:Thing ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalEnumeration a rdfs:Class ;
    rdfs:label "MedicalEnumeration" ;
    rdfs:comment "Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalEvidenceLevel a rdfs:Class ;
    rdfs:label "MedicalEvidenceLevel" ;
    rdfs:comment "Level of evidence for a medical guideline. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalGuideline a rdfs:Class ;
    rdfs:label "MedicalGuideline" ;
    rdfs:comment "Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalGuidelineContraindication a rdfs:Class ;
    rdfs:label "MedicalGuidelineContraindication" ;
    rdfs:comment "A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound." ;
    rdfs:subClassOf schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalGuidelineRecommendation a rdfs:Class ;
    rdfs:label "MedicalGuidelineRecommendation" ;
    rdfs:comment "A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound." ;
    rdfs:subClassOf schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalImagingTechnique a rdfs:Class ;
    rdfs:label "MedicalImagingTechnique" ;
    rdfs:comment "Any medical imaging modality typically used for diagnostic purposes. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalIndication a rdfs:Class ;
    rdfs:label "MedicalIndication" ;
    rdfs:comment "A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalIntangible a rdfs:Class ;
    rdfs:label "MedicalIntangible" ;
    rdfs:comment "A utility class that serves as the umbrella for a number of 'intangible' things in the medical space." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalObservationalStudy a rdfs:Class ;
    rdfs:label "MedicalObservationalStudy" ;
    rdfs:comment "An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment." ;
    rdfs:subClassOf schema:MedicalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalObservationalStudyDesign a rdfs:Class ;
    rdfs:label "MedicalObservationalStudyDesign" ;
    rdfs:comment "Design models for observational medical studies. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalOrganization a rdfs:Class ;
    rdfs:label "MedicalOrganization" ;
    rdfs:comment "A medical organization (physical or not), such as hospital, institution or clinic." ;
    rdfs:subClassOf schema:Organization .

schema:MedicalProcedure a rdfs:Class ;
    rdfs:label "MedicalProcedure" ;
    rdfs:comment "A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques." ;
    rdfs:subClassOf schema:MedicalEntity ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/50731006> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalProcedureType a rdfs:Class ;
    rdfs:label "MedicalProcedureType" ;
    rdfs:comment "An enumeration that describes different types of medical procedures." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalRiskCalculator a rdfs:Class ;
    rdfs:label "MedicalRiskCalculator" ;
    rdfs:comment "A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators." ;
    rdfs:subClassOf schema:MedicalRiskEstimator ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalRiskEstimator a rdfs:Class ;
    rdfs:label "MedicalRiskEstimator" ;
    rdfs:comment "Any rule set or interactive tool for estimating the risk of developing a complication or condition." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalRiskFactor a rdfs:Class ;
    rdfs:label "MedicalRiskFactor" ;
    rdfs:comment "A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalRiskScore a rdfs:Class ;
    rdfs:label "MedicalRiskScore" ;
    rdfs:comment "A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score." ;
    rdfs:subClassOf schema:MedicalRiskEstimator ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalScholarlyArticle a rdfs:Class ;
    rdfs:label "MedicalScholarlyArticle" ;
    rdfs:comment "A scholarly article in the medical domain." ;
    rdfs:subClassOf schema:ScholarlyArticle ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalSign a rdfs:Class ;
    rdfs:label "MedicalSign" ;
    rdfs:comment "Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination." ;
    rdfs:subClassOf schema:MedicalSignOrSymptom ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalSignOrSymptom a rdfs:Class ;
    rdfs:label "MedicalSignOrSymptom" ;
    rdfs:comment "Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective." ;
    rdfs:subClassOf schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalSpecialty a rdfs:Class ;
    rdfs:label "MedicalSpecialty" ;
    rdfs:comment "Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration,
        schema:Specialty ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalStudy a rdfs:Class ;
    rdfs:label "MedicalStudy" ;
    rdfs:comment "A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalStudyStatus a rdfs:Class ;
    rdfs:label "MedicalStudyStatus" ;
    rdfs:comment "The status of a medical study. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalSymptom a rdfs:Class ;
    rdfs:label "MedicalSymptom" ;
    rdfs:comment "Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue." ;
    rdfs:subClassOf schema:MedicalSignOrSymptom ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalTest a rdfs:Class ;
    rdfs:label "MedicalTest" ;
    rdfs:comment "Any medical test, typically performed for diagnostic purposes." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalTestPanel a rdfs:Class ;
    rdfs:label "MedicalTestPanel" ;
    rdfs:comment "Any collection of tests commonly ordered together." ;
    rdfs:subClassOf schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalTherapy a rdfs:Class ;
    rdfs:label "MedicalTherapy" ;
    rdfs:comment "Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition." ;
    rdfs:subClassOf schema:TherapeuticProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalTrial a rdfs:Class ;
    rdfs:label "MedicalTrial" ;
    rdfs:comment "A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups." ;
    rdfs:subClassOf schema:MedicalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicalTrialDesign a rdfs:Class ;
    rdfs:label "MedicalTrialDesign" ;
    rdfs:comment "Design models for medical trials. Enumerated type." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_WikiDoc> .

schema:MedicalWebPage a rdfs:Class ;
    rdfs:label "MedicalWebPage" ;
    rdfs:comment "A web page that provides medical information." ;
    rdfs:subClassOf schema:WebPage ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MedicineSystem a rdfs:Class ;
    rdfs:label "MedicineSystem" ;
    rdfs:comment "Systems of medical practice." ;
    rdfs:subClassOf schema:MedicalEnumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MeetingRoom a rdfs:Class ;
    rdfs:label "MeetingRoom" ;
    rdfs:comment """A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:Room ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:MensClothingStore a rdfs:Class ;
    rdfs:label "MensClothingStore" ;
    rdfs:comment "A men's clothing store." ;
    rdfs:subClassOf schema:Store .

schema:Menu a rdfs:Class ;
    rdfs:label "Menu" ;
    rdfs:comment "A structured representation of food or drink items available from a FoodEstablishment." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MenuItem a rdfs:Class ;
    rdfs:label "MenuItem" ;
    rdfs:comment "A food or drink item listed in a menu or menu section." ;
    rdfs:subClassOf schema:Intangible .

schema:MenuSection a rdfs:Class ;
    rdfs:label "MenuSection" ;
    rdfs:comment "A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MerchantReturnEnumeration a rdfs:Class ;
    rdfs:label "MerchantReturnEnumeration" ;
    rdfs:comment "MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:MerchantReturnPolicy a rdfs:Class ;
    rdfs:label "MerchantReturnPolicy" ;
    rdfs:comment "A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]]." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Message a rdfs:Class ;
    rdfs:label "Message" ;
    rdfs:comment "A single message from a sender to one or more organizations or people." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MiddleSchool a rdfs:Class ;
    rdfs:label "MiddleSchool" ;
    rdfs:comment "A middle school (typically for children aged around 11-14, although this varies somewhat)." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:MobileApplication a rdfs:Class ;
    rdfs:label "MobileApplication" ;
    rdfs:comment "A software application designed specifically to work well on a mobile device such as a telephone." ;
    rdfs:subClassOf schema:SoftwareApplication .

schema:MobilePhoneStore a rdfs:Class ;
    rdfs:label "MobilePhoneStore" ;
    rdfs:comment "A store that sells mobile phones and related accessories." ;
    rdfs:subClassOf schema:Store .

schema:MonetaryAmount a rdfs:Class ;
    rdfs:label "MonetaryAmount" ;
    rdfs:comment "A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between Â£1,000 and Â£1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:MonetaryAmountDistribution a rdfs:Class ;
    rdfs:label "MonetaryAmountDistribution" ;
    rdfs:comment "A statistical distribution of monetary amounts." ;
    rdfs:subClassOf schema:QuantitativeValueDistribution ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:MonetaryGrant a rdfs:Class ;
    rdfs:label "MonetaryGrant" ;
    rdfs:comment "A monetary grant." ;
    rdfs:subClassOf schema:Grant ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:MoneyTransfer a rdfs:Class ;
    rdfs:label "MoneyTransfer" ;
    rdfs:comment "The act of transferring money from one place to another place. This may occur electronically or physically." ;
    rdfs:subClassOf schema:TransferAction ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:MortgageLoan a rdfs:Class ;
    rdfs:label "MortgageLoan" ;
    rdfs:comment "A loan in which property or real estate is used as collateral. (A loan securitized against some real estate)." ;
    rdfs:subClassOf schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:Mosque a rdfs:Class ;
    rdfs:label "Mosque" ;
    rdfs:comment "A mosque." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:Motel a rdfs:Class ;
    rdfs:label "Motel" ;
    rdfs:comment """A motel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:LodgingBusiness .

schema:Motorcycle a rdfs:Class ;
    rdfs:label "Motorcycle" ;
    rdfs:comment "A motorcycle or motorbike is a single-track, two-wheeled motor vehicle." ;
    rdfs:subClassOf schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:MotorcycleDealer a rdfs:Class ;
    rdfs:label "MotorcycleDealer" ;
    rdfs:comment "A motorcycle dealer." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:MotorcycleRepair a rdfs:Class ;
    rdfs:label "MotorcycleRepair" ;
    rdfs:comment "A motorcycle repair shop." ;
    rdfs:subClassOf schema:AutomotiveBusiness .

schema:MotorizedBicycle a rdfs:Class ;
    rdfs:label "MotorizedBicycle" ;
    rdfs:comment "A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling." ;
    rdfs:subClassOf schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Mountain a rdfs:Class ;
    rdfs:label "Mountain" ;
    rdfs:comment "A mountain, like Mount Whitney or Mount Everest." ;
    rdfs:subClassOf schema:Landform .

schema:MoveAction a rdfs:Class ;
    rdfs:label "MoveAction" ;
    rdfs:comment "The act of an agent relocating to a place.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object." ;
    rdfs:subClassOf schema:Action .

schema:Movie a rdfs:Class ;
    rdfs:label "Movie" ;
    rdfs:comment "A movie." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MovieClip a rdfs:Class ;
    rdfs:label "MovieClip" ;
    rdfs:comment "A short segment/part of a movie." ;
    rdfs:subClassOf schema:Clip .

schema:MovieRentalStore a rdfs:Class ;
    rdfs:label "MovieRentalStore" ;
    rdfs:comment "A movie rental store." ;
    rdfs:subClassOf schema:Store .

schema:MovieSeries a rdfs:Class ;
    rdfs:label "MovieSeries" ;
    rdfs:comment "A series of movies. Included movies can be indicated with the hasPart property." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:MovieTheater a rdfs:Class ;
    rdfs:label "MovieTheater" ;
    rdfs:comment "A movie theater." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EntertainmentBusiness .

schema:MovingCompany a rdfs:Class ;
    rdfs:label "MovingCompany" ;
    rdfs:comment "A moving company." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:Muscle a rdfs:Class ;
    rdfs:label "Muscle" ;
    rdfs:comment "A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Museum a rdfs:Class ;
    rdfs:label "Museum" ;
    rdfs:comment "A museum." ;
    rdfs:subClassOf schema:CivicStructure .

schema:MusicAlbum a rdfs:Class ;
    rdfs:label "MusicAlbum" ;
    rdfs:comment "A collection of music tracks." ;
    rdfs:subClassOf schema:MusicPlaylist .

schema:MusicAlbumProductionType a rdfs:Class ;
    rdfs:label "MusicAlbumProductionType" ;
    rdfs:comment "Classification of the album by it's type of content: soundtrack, live album, studio album, etc." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:MusicAlbumReleaseType a rdfs:Class ;
    rdfs:label "MusicAlbumReleaseType" ;
    rdfs:comment "The kind of release which this album is: single, EP or album." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:MusicComposition a rdfs:Class ;
    rdfs:label "MusicComposition" ;
    rdfs:comment "A musical composition." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:MusicEvent a rdfs:Class ;
    rdfs:label "MusicEvent" ;
    rdfs:comment "Event type: Music event." ;
    rdfs:subClassOf schema:Event .

schema:MusicGroup a rdfs:Class ;
    rdfs:label "MusicGroup" ;
    rdfs:comment "A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:MusicPlaylist a rdfs:Class ;
    rdfs:label "MusicPlaylist" ;
    rdfs:comment "A collection of music tracks in playlist form." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MusicRecording a rdfs:Class ;
    rdfs:label "MusicRecording" ;
    rdfs:comment "A music recording (track), usually a single song." ;
    rdfs:subClassOf schema:CreativeWork .

schema:MusicRelease a rdfs:Class ;
    rdfs:label "MusicRelease" ;
    rdfs:comment "A MusicRelease is a specific release of a music album." ;
    rdfs:subClassOf schema:MusicPlaylist ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:MusicReleaseFormatType a rdfs:Class ;
    rdfs:label "MusicReleaseFormatType" ;
    rdfs:comment "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.)." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:MusicStore a rdfs:Class ;
    rdfs:label "MusicStore" ;
    rdfs:comment "A music store." ;
    rdfs:subClassOf schema:Store .

schema:MusicVenue a rdfs:Class ;
    rdfs:label "MusicVenue" ;
    rdfs:comment "A music venue." ;
    rdfs:subClassOf schema:CivicStructure .

schema:MusicVideoObject a rdfs:Class ;
    rdfs:label "MusicVideoObject" ;
    rdfs:comment "A music video file." ;
    rdfs:subClassOf schema:MediaObject .

schema:NGO a rdfs:Class ;
    rdfs:label "NGO" ;
    rdfs:comment "Organization: Non-governmental Organization." ;
    rdfs:subClassOf schema:Organization .

schema:NLNonprofitType a rdfs:Class ;
    rdfs:label "NLNonprofitType" ;
    rdfs:comment "NLNonprofitType: Non-profit organization type originating from the Netherlands." ;
    rdfs:subClassOf schema:NonprofitType ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:NailSalon a rdfs:Class ;
    rdfs:label "NailSalon" ;
    rdfs:comment "A nail salon." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:Nerve a rdfs:Class ;
    rdfs:label "Nerve" ;
    rdfs:comment "A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:NewsArticle a rdfs:Class ;
    rdfs:label "NewsArticle" ;
    rdfs:comment """A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.

A more detailed overview of [schema.org News markup](/docs/news.html) is also available.
""" ;
    rdfs:subClassOf schema:Article ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP-draws> .

schema:NewsMediaOrganization a rdfs:Class ;
    rdfs:label "NewsMediaOrganization" ;
    rdfs:comment "A News/Media organization such as a newspaper or TV station." ;
    rdfs:subClassOf schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:Newspaper a rdfs:Class ;
    rdfs:label "Newspaper" ;
    rdfs:comment "A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily." ;
    rdfs:subClassOf schema:Periodical ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:source <http://www.productontology.org/id/Newspaper> .

schema:NightClub a rdfs:Class ;
    rdfs:label "NightClub" ;
    rdfs:comment "A nightclub or discotheque." ;
    rdfs:subClassOf schema:EntertainmentBusiness .

schema:NonprofitType a rdfs:Class ;
    rdfs:label "NonprofitType" ;
    rdfs:comment "NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Notary a rdfs:Class ;
    rdfs:label "Notary" ;
    rdfs:comment "A notary." ;
    rdfs:subClassOf schema:LegalService .

schema:NoteDigitalDocument a rdfs:Class ;
    rdfs:label "NoteDigitalDocument" ;
    rdfs:comment "A file containing a note, primarily for the author." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:Number a rdfs:Class,
        schema:DataType ;
    rdfs:label "Number" ;
    rdfs:comment "Data type: Number.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." .

schema:NutritionInformation a rdfs:Class ;
    rdfs:label "NutritionInformation" ;
    rdfs:comment "Nutritional information about the recipe." ;
    rdfs:subClassOf schema:StructuredValue .

schema:Observation a rdfs:Class ;
    rdfs:label "Observation" ;
    rdfs:comment """Instances of the class [[Observation]] are used to specify observations about an entity (which may or may not be an instance of a [[StatisticalPopulation]]), at a particular time. The principal properties of an [[Observation]] are [[observedNode]], [[measuredProperty]], [[measuredValue]] (or [[median]], etc.) and [[observationDate]] ([[measuredProperty]] properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the [lifeExpectancy example](https://www.w3.org/TR/vocab-data-cube/#dsd-example)).
See also [[StatisticalPopulation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  """ ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:Occupation a rdfs:Class ;
    rdfs:label "Occupation" ;
    rdfs:comment "A profession, may involve prolonged training and/or a formal qualification." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:OccupationalExperienceRequirements a rdfs:Class ;
    rdfs:label "OccupationalExperienceRequirements" ;
    rdfs:comment "Indicates employment-related experience requirements, e.g. [[monthsOfExperience]]." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2681> .

schema:OccupationalTherapy a rdfs:Class ;
    rdfs:label "OccupationalTherapy" ;
    rdfs:comment "A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems." ;
    rdfs:subClassOf schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OceanBodyOfWater a rdfs:Class ;
    rdfs:label "OceanBodyOfWater" ;
    rdfs:comment "An ocean (for example, the Pacific)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Offer a rdfs:Class ;
    rdfs:label "Offer" ;
    rdfs:comment "An offer to transfer some rights to an item or to provide a service â€” for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\\\\n\\\\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\\\\n\\\\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/)." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:OfferCatalog a rdfs:Class ;
    rdfs:label "OfferCatalog" ;
    rdfs:comment "An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider." ;
    rdfs:subClassOf schema:ItemList .

schema:OfferForLease a rdfs:Class ;
    rdfs:label "OfferForLease" ;
    rdfs:comment """An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose
  [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  """ ;
    rdfs:subClassOf schema:Offer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2348> .

schema:OfferForPurchase a rdfs:Class ;
    rdfs:label "OfferForPurchase" ;
    rdfs:comment """An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose
  [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  """ ;
    rdfs:subClassOf schema:Offer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2348> .

schema:OfferItemCondition a rdfs:Class ;
    rdfs:label "OfferItemCondition" ;
    rdfs:comment "A list of possible conditions for the item." ;
    rdfs:subClassOf schema:Enumeration .

schema:OfferShippingDetails a rdfs:Class ;
    rdfs:label "OfferShippingDetails" ;
    rdfs:comment """OfferShippingDetails represents information about shipping destinations.

Multiple of these entities can be used to represent different shipping rates for different destinations:

One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.

Multiple of these entities can be used to represent different shipping costs and delivery times.

Two entities that are identical but differ in rate and time:

e.g. Cheaper and slower: $5 in 5-7days
or Fast and expensive: $15 in 1-2 days.""" ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:OfficeEquipmentStore a rdfs:Class ;
    rdfs:label "OfficeEquipmentStore" ;
    rdfs:comment "An office equipment store." ;
    rdfs:subClassOf schema:Store .

schema:OnDemandEvent a rdfs:Class ;
    rdfs:label "OnDemandEvent" ;
    rdfs:comment "A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand." ;
    rdfs:subClassOf schema:PublicationEvent .

schema:OpeningHoursSpecification a rdfs:Class ;
    rdfs:label "OpeningHoursSpecification" ;
    rdfs:comment """A structured value providing information about the opening hours of a place or a certain service inside a place.\\\\n\\\\n
The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\\\\n\\\\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
      """ ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:OpinionNewsArticle a rdfs:Class ;
    rdfs:label "OpinionNewsArticle" ;
    rdfs:comment "An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication. " ;
    rdfs:subClassOf schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:Optician a rdfs:Class ;
    rdfs:label "Optician" ;
    rdfs:comment "A store that sells reading glasses and similar devices for improving vision." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Order a rdfs:Class ;
    rdfs:label "Order" ;
    rdfs:comment "An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer." ;
    rdfs:subClassOf schema:Intangible .

schema:OrderAction a rdfs:Class ;
    rdfs:label "OrderAction" ;
    rdfs:comment "An agent orders an object/product/service to be delivered/sent." ;
    rdfs:subClassOf schema:TradeAction .

schema:OrderItem a rdfs:Class ;
    rdfs:label "OrderItem" ;
    rdfs:comment "An order item is a line of an order. It includes the quantity and shipping details of a bought offer." ;
    rdfs:subClassOf schema:Intangible .

schema:OrderStatus a rdfs:Class ;
    rdfs:label "OrderStatus" ;
    rdfs:comment "Enumerated status values for Order." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:Organization a rdfs:Class ;
    rdfs:label "Organization" ;
    rdfs:comment "An organization such as a school, NGO, corporation, club, etc." ;
    rdfs:subClassOf schema:Thing .

schema:OrganizationRole a rdfs:Class ;
    rdfs:label "OrganizationRole" ;
    rdfs:comment "A subclass of Role used to describe roles within organizations." ;
    rdfs:subClassOf schema:Role .

schema:OrganizeAction a rdfs:Class ;
    rdfs:label "OrganizeAction" ;
    rdfs:comment "The act of manipulating/administering/supervising/controlling one or more objects." ;
    rdfs:subClassOf schema:Action .

schema:OutletStore a rdfs:Class ;
    rdfs:label "OutletStore" ;
    rdfs:comment "An outlet store." ;
    rdfs:subClassOf schema:Store .

schema:OwnershipInfo a rdfs:Class ;
    rdfs:label "OwnershipInfo" ;
    rdfs:comment "A structured value providing information about when a certain organization or person owned a certain product." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:PaintAction a rdfs:Class ;
    rdfs:label "PaintAction" ;
    rdfs:comment "The act of producing a painting, typically with paint and canvas as instruments." ;
    rdfs:subClassOf schema:CreateAction .

schema:Painting a rdfs:Class ;
    rdfs:label "Painting" ;
    rdfs:comment "A painting." ;
    rdfs:subClassOf schema:CreativeWork .

schema:PalliativeProcedure a rdfs:Class ;
    rdfs:label "PalliativeProcedure" ;
    rdfs:comment "A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition." ;
    rdfs:subClassOf schema:MedicalProcedure,
        schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ParcelDelivery a rdfs:Class ;
    rdfs:label "ParcelDelivery" ;
    rdfs:comment "The delivery of a parcel either via the postal service or a commercial service." ;
    rdfs:subClassOf schema:Intangible .

schema:ParentAudience a rdfs:Class ;
    rdfs:label "ParentAudience" ;
    rdfs:comment "A set of characteristics describing parents, who can be interested in viewing some content." ;
    rdfs:subClassOf schema:PeopleAudience .

schema:Park a rdfs:Class ;
    rdfs:label "Park" ;
    rdfs:comment "A park." ;
    rdfs:subClassOf schema:CivicStructure .

schema:ParkingFacility a rdfs:Class ;
    rdfs:label "ParkingFacility" ;
    rdfs:comment "A parking lot or other parking facility." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PathologyTest a rdfs:Class ;
    rdfs:label "PathologyTest" ;
    rdfs:comment "A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist." ;
    rdfs:subClassOf schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Patient a rdfs:Class ;
    rdfs:label "Patient" ;
    rdfs:comment "A patient is any person recipient of health care services." ;
    rdfs:subClassOf schema:MedicalAudience,
        schema:Person ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/116154003> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PawnShop a rdfs:Class ;
    rdfs:label "PawnShop" ;
    rdfs:comment "A shop that will buy, or lend money against the security of, personal possessions." ;
    rdfs:subClassOf schema:Store .

schema:PayAction a rdfs:Class ;
    rdfs:label "PayAction" ;
    rdfs:comment "An agent pays a price to a participant." ;
    rdfs:subClassOf schema:TradeAction .

schema:PaymentCard a rdfs:Class ;
    rdfs:label "PaymentCard" ;
    rdfs:comment "A payment method using a credit, debit, store or other card to associate the payment with an account." ;
    rdfs:subClassOf schema:FinancialProduct,
        schema:PaymentMethod ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:PaymentChargeSpecification a rdfs:Class ;
    rdfs:label "PaymentChargeSpecification" ;
    rdfs:comment "The costs of settling the payment using a particular payment method." ;
    rdfs:subClassOf schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:PaymentMethod a rdfs:Class ;
    rdfs:label "PaymentMethod" ;
    rdfs:comment """A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\\\\n* http://purl.org/goodrelations/v1#ByInvoice\\\\n* http://purl.org/goodrelations/v1#Cash\\\\n* http://purl.org/goodrelations/v1#CheckInAdvance\\\\n* http://purl.org/goodrelations/v1#COD\\\\n* http://purl.org/goodrelations/v1#DirectDebit\\\\n* http://purl.org/goodrelations/v1#GoogleCheckout\\\\n* http://purl.org/goodrelations/v1#PayPal\\\\n* http://purl.org/goodrelations/v1#PaySwarm
        """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:PaymentService a rdfs:Class ;
    rdfs:label "PaymentService" ;
    rdfs:comment "A Service to transfer funds from a person or organization to a beneficiary person or organization." ;
    rdfs:subClassOf schema:FinancialProduct ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:PaymentStatusType a rdfs:Class ;
    rdfs:label "PaymentStatusType" ;
    rdfs:comment "A specific payment status. For example, PaymentDue, PaymentComplete, etc." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:PeopleAudience a rdfs:Class ;
    rdfs:label "PeopleAudience" ;
    rdfs:comment "A set of characteristics belonging to people, e.g. who compose an item's target audience." ;
    rdfs:subClassOf schema:Audience .

schema:PerformAction a rdfs:Class ;
    rdfs:label "PerformAction" ;
    rdfs:comment "The act of participating in performance arts." ;
    rdfs:subClassOf schema:PlayAction .

schema:PerformanceRole a rdfs:Class ;
    rdfs:label "PerformanceRole" ;
    rdfs:comment "A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc." ;
    rdfs:subClassOf schema:Role .

schema:PerformingArtsTheater a rdfs:Class ;
    rdfs:label "PerformingArtsTheater" ;
    rdfs:comment "A theater or other performing art center." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PerformingGroup a rdfs:Class ;
    rdfs:label "PerformingGroup" ;
    rdfs:comment "A performance group, such as a band, an orchestra, or a circus." ;
    rdfs:subClassOf schema:Organization .

schema:Periodical a rdfs:Class ;
    rdfs:label "Periodical" ;
    rdfs:comment "A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html)." ;
    rdfs:subClassOf schema:CreativeWorkSeries ;
    ns2:equivalentClass <http://purl.org/ontology/bibo/Periodical> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:Permit a rdfs:Class ;
    rdfs:label "Permit" ;
    rdfs:comment "A permit issued by an organization, e.g. a parking pass." ;
    rdfs:subClassOf schema:Intangible .

schema:Person a rdfs:Class ;
    rdfs:label "Person" ;
    rdfs:comment "A person (alive, dead, undead, or fictional)." ;
    rdfs:subClassOf schema:Thing ;
    ns2:equivalentClass <http://xmlns.com/foaf/0.1/Person> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:PetStore a rdfs:Class ;
    rdfs:label "PetStore" ;
    rdfs:comment "A pet store." ;
    rdfs:subClassOf schema:Store .

schema:Pharmacy a rdfs:Class ;
    rdfs:label "Pharmacy" ;
    rdfs:comment "A pharmacy or drugstore." ;
    rdfs:subClassOf schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:Photograph a rdfs:Class ;
    rdfs:label "Photograph" ;
    rdfs:comment "A photograph." ;
    rdfs:subClassOf schema:CreativeWork .

schema:PhotographAction a rdfs:Class ;
    rdfs:label "PhotographAction" ;
    rdfs:comment "The act of capturing still images of objects using a camera." ;
    rdfs:subClassOf schema:CreateAction .

schema:PhysicalActivity a rdfs:Class ;
    rdfs:label "PhysicalActivity" ;
    rdfs:comment "Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan." ;
    rdfs:subClassOf schema:LifestyleModification ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PhysicalActivityCategory a rdfs:Class ;
    rdfs:label "PhysicalActivityCategory" ;
    rdfs:comment "Categories of physical activity, organized by physiologic classification." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PhysicalExam a rdfs:Class ;
    rdfs:label "PhysicalExam" ;
    rdfs:comment "A type of physical examination of a patient performed by a physician. " ;
    rdfs:subClassOf schema:MedicalEnumeration,
        schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PhysicalTherapy a rdfs:Class ;
    rdfs:label "PhysicalTherapy" ;
    rdfs:comment "A process of progressive physical care and rehabilitation aimed at improving a health condition." ;
    rdfs:subClassOf schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Physician a rdfs:Class ;
    rdfs:label "Physician" ;
    rdfs:comment "A doctor's office." ;
    rdfs:subClassOf schema:MedicalBusiness,
        schema:MedicalOrganization .

schema:Place a rdfs:Class ;
    rdfs:label "Place" ;
    rdfs:comment "Entities that have a somewhat fixed, physical extension." ;
    rdfs:subClassOf schema:Thing .

schema:PlaceOfWorship a rdfs:Class ;
    rdfs:label "PlaceOfWorship" ;
    rdfs:comment "Place of worship, such as a church, synagogue, or mosque." ;
    rdfs:subClassOf schema:CivicStructure .

schema:PlanAction a rdfs:Class ;
    rdfs:label "PlanAction" ;
    rdfs:comment "The act of planning the execution of an event/task/action/reservation/plan to a future date." ;
    rdfs:subClassOf schema:OrganizeAction .

schema:Play a rdfs:Class ;
    rdfs:label "Play" ;
    rdfs:comment "A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note the peformance of a Play would be a [[TheaterEvent]] - the *Play* being the [[workPerformed]]." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1816> .

schema:PlayAction a rdfs:Class ;
    rdfs:label "PlayAction" ;
    rdfs:comment "The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\\\\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content." ;
    rdfs:subClassOf schema:Action .

schema:Playground a rdfs:Class ;
    rdfs:label "Playground" ;
    rdfs:comment "A playground." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Plumber a rdfs:Class ;
    rdfs:label "Plumber" ;
    rdfs:comment "A plumbing service." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:PodcastEpisode a rdfs:Class ;
    rdfs:label "PodcastEpisode" ;
    rdfs:comment "A single episode of a podcast series." ;
    rdfs:subClassOf schema:Episode ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/373> .

schema:PodcastSeason a rdfs:Class ;
    rdfs:label "PodcastSeason" ;
    rdfs:comment "A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used." ;
    rdfs:subClassOf schema:CreativeWorkSeason ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/373> .

schema:PodcastSeries a rdfs:Class ;
    rdfs:label "PodcastSeries" ;
    rdfs:comment "A podcast is an episodic series of digital audio or video files which a user can download and listen to." ;
    rdfs:subClassOf schema:CreativeWorkSeries ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/373> .

schema:PoliceStation a rdfs:Class ;
    rdfs:label "PoliceStation" ;
    rdfs:comment "A police station." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:EmergencyService .

schema:Pond a rdfs:Class ;
    rdfs:label "Pond" ;
    rdfs:comment "A pond." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:PostOffice a rdfs:Class ;
    rdfs:label "PostOffice" ;
    rdfs:comment "A post office." ;
    rdfs:subClassOf schema:GovernmentOffice .

schema:PostalAddress a rdfs:Class ;
    rdfs:label "PostalAddress" ;
    rdfs:comment "The mailing address." ;
    rdfs:subClassOf schema:ContactPoint .

schema:PostalCodeRangeSpecification a rdfs:Class ;
    rdfs:label "PostalCodeRangeSpecification" ;
    rdfs:comment "Indicates a range of postalcodes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:Poster a rdfs:Class ;
    rdfs:label "Poster" ;
    rdfs:comment "A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1448> .

schema:PreOrderAction a rdfs:Class ;
    rdfs:label "PreOrderAction" ;
    rdfs:comment "An agent orders a (not yet released) object/product/service to be delivered/sent." ;
    rdfs:subClassOf schema:TradeAction ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1125> .

schema:PrependAction a rdfs:Class ;
    rdfs:label "PrependAction" ;
    rdfs:comment "The act of inserting at the beginning if an ordered collection." ;
    rdfs:subClassOf schema:InsertAction .

schema:Preschool a rdfs:Class ;
    rdfs:label "Preschool" ;
    rdfs:comment "A preschool." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:PresentationDigitalDocument a rdfs:Class ;
    rdfs:label "PresentationDigitalDocument" ;
    rdfs:comment "A file containing slides or used for a presentation." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:PreventionIndication a rdfs:Class ;
    rdfs:label "PreventionIndication" ;
    rdfs:comment "An indication for preventing an underlying condition, symptom, etc." ;
    rdfs:subClassOf schema:MedicalIndication ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PriceComponentTypeEnumeration a rdfs:Class ;
    rdfs:label "PriceComponentTypeEnumeration" ;
    rdfs:comment "Enumerates different price components that together make up the total price for an offered product." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:PriceSpecification a rdfs:Class ;
    rdfs:label "PriceSpecification" ;
    rdfs:comment "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:PriceTypeEnumeration a rdfs:Class ;
    rdfs:label "PriceTypeEnumeration" ;
    rdfs:comment "Enumerates different price types, for example list price, invoice price, and sale price." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:Product a rdfs:Class ;
    rdfs:label "Product" ;
    rdfs:comment "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online." ;
    rdfs:subClassOf schema:Thing ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:ProductCollection a rdfs:Class ;
    rdfs:label "ProductCollection" ;
    rdfs:comment "A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]]." ;
    rdfs:subClassOf schema:Collection,
        schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2597> .

schema:ProductGroup a rdfs:Class ;
    rdfs:label "ProductGroup" ;
    rdfs:comment """A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.

While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]]. """ ;
    rdfs:subClassOf schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2597> .

schema:ProductModel a rdfs:Class ;
    rdfs:label "ProductModel" ;
    rdfs:comment "A datasheet or vendor specification of a product (in the sense of a prototypical description)." ;
    rdfs:subClassOf schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:ProfessionalService a rdfs:Class ;
    rdfs:label "ProfessionalService" ;
    rdfs:comment """Original definition: "provider of professional services."\\\\n\\\\nThe general [[ProfessionalService]] type for local businesses was deprecated due to confusion with [[Service]]. For reference, the types that it included were: [[Dentist]],
        [[AccountingService]], [[Attorney]], [[Notary]], as well as types for several kinds of [[HomeAndConstructionBusiness]]: [[Electrician]], [[GeneralContractor]],
        [[HousePainter]], [[Locksmith]], [[Plumber]], [[RoofingContractor]]. [[LegalService]] was introduced as a more inclusive supertype of [[Attorney]].""" ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ProfilePage a rdfs:Class ;
    rdfs:label "ProfilePage" ;
    rdfs:comment "Web page type: Profile page." ;
    rdfs:subClassOf schema:WebPage .

schema:ProgramMembership a rdfs:Class ;
    rdfs:label "ProgramMembership" ;
    rdfs:comment "Used to describe membership in a loyalty programs (e.g. \\"StarAliance\\"), traveler clubs (e.g. \\"AAA\\"), purchase clubs (\\"Safeway Club\\"), etc." ;
    rdfs:subClassOf schema:Intangible .

schema:Project a rdfs:Class ;
    rdfs:label "Project" ;
    rdfs:comment """An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.
Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. 
   """ ;
    rdfs:subClassOf schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:PronounceableText a rdfs:Class ;
    rdfs:label "PronounceableText" ;
    rdfs:comment "Data type: PronounceableText." ;
    rdfs:subClassOf schema:Text ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2108> .

schema:Property a rdfs:Class ;
    rdfs:label "Property" ;
    rdfs:comment "A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property." ;
    rdfs:subClassOf schema:Intangible ;
    ns2:equivalentClass rdf:Property ;
    schema:isPartOf <https://meta.schema.org> .

schema:PropertyValue a rdfs:Class ;
    rdfs:label "PropertyValue" ;
    rdfs:comment """A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\\\\n\\\\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
    """ ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:PropertyValueSpecification a rdfs:Class ;
    rdfs:label "PropertyValueSpecification" ;
    rdfs:comment "A Property value specification." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass> .

schema:PsychologicalTreatment a rdfs:Class ;
    rdfs:label "PsychologicalTreatment" ;
    rdfs:comment "A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs." ;
    rdfs:subClassOf schema:TherapeuticProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PublicSwimmingPool a rdfs:Class ;
    rdfs:label "PublicSwimmingPool" ;
    rdfs:comment "A public swimming pool." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:PublicToilet a rdfs:Class ;
    rdfs:label "PublicToilet" ;
    rdfs:comment "A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses." ;
    rdfs:subClassOf schema:CivicStructure ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1624> .

schema:PublicationEvent a rdfs:Class ;
    rdfs:label "PublicationEvent" ;
    rdfs:comment "A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media." ;
    rdfs:subClassOf schema:Event .

schema:PublicationIssue a rdfs:Class ;
    rdfs:label "PublicationIssue" ;
    rdfs:comment "A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html)." ;
    rdfs:subClassOf schema:CreativeWork ;
    ns2:equivalentClass <http://purl.org/ontology/bibo/Issue> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:PublicationVolume a rdfs:Class ;
    rdfs:label "PublicationVolume" ;
    rdfs:comment "A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html)." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:QAPage a rdfs:Class ;
    rdfs:label "QAPage" ;
    rdfs:comment "A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs)." ;
    rdfs:subClassOf schema:WebPage .

schema:QualitativeValue a rdfs:Class ;
    rdfs:label "QualitativeValue" ;
    rdfs:comment "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:QuantitativeValue a rdfs:Class ;
    rdfs:label "QuantitativeValue" ;
    rdfs:comment " A point value or interval for product characteristics and other purposes." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:QuantitativeValueDistribution a rdfs:Class ;
    rdfs:label "QuantitativeValueDistribution" ;
    rdfs:comment "A statistical distribution of values." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:Quantity a rdfs:Class ;
    rdfs:label "Quantity" ;
    rdfs:comment "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'." ;
    rdfs:subClassOf schema:Intangible .

schema:Question a rdfs:Class ;
    rdfs:label "Question" ;
    rdfs:comment "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document." ;
    rdfs:subClassOf schema:Comment ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange> .

schema:Quiz a rdfs:Class ;
    rdfs:label "Quiz" ;
    rdfs:comment "Quiz: A test of knowledge, skills and abilities." ;
    rdfs:subClassOf schema:LearningResource ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2611> .

schema:Quotation a rdfs:Class ;
    rdfs:label "Quotation" ;
    rdfs:comment "A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]]." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/271> .

schema:QuoteAction a rdfs:Class ;
    rdfs:label "QuoteAction" ;
    rdfs:comment "An agent quotes/estimates/appraises an object/product/service with a price at a location/store." ;
    rdfs:subClassOf schema:TradeAction .

schema:RVPark a rdfs:Class ;
    rdfs:label "RVPark" ;
    rdfs:comment "A place offering space for \\"Recreational Vehicles\\", Caravans, mobile homes and the like." ;
    rdfs:subClassOf schema:CivicStructure .

schema:RadiationTherapy a rdfs:Class ;
    rdfs:label "RadiationTherapy" ;
    rdfs:comment "A process of care using radiation aimed at improving a health condition." ;
    rdfs:subClassOf schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RadioBroadcastService a rdfs:Class ;
    rdfs:label "RadioBroadcastService" ;
    rdfs:comment "A delivery service through which radio content is provided via broadcast over the air or online." ;
    rdfs:subClassOf schema:BroadcastService ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2109> .

schema:RadioChannel a rdfs:Class ;
    rdfs:label "RadioChannel" ;
    rdfs:comment "A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:BroadcastChannel .

schema:RadioClip a rdfs:Class ;
    rdfs:label "RadioClip" ;
    rdfs:comment "A short radio program or a segment/part of a radio program." ;
    rdfs:subClassOf schema:Clip .

schema:RadioEpisode a rdfs:Class ;
    rdfs:label "RadioEpisode" ;
    rdfs:comment "A radio episode which can be part of a series or season." ;
    rdfs:subClassOf schema:Episode .

schema:RadioSeason a rdfs:Class ;
    rdfs:label "RadioSeason" ;
    rdfs:comment "Season dedicated to radio broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWorkSeason .

schema:RadioSeries a rdfs:Class ;
    rdfs:label "RadioSeries" ;
    rdfs:comment "CreativeWorkSeries dedicated to radio broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:RadioStation a rdfs:Class ;
    rdfs:label "RadioStation" ;
    rdfs:comment "A radio station." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:Rating a rdfs:Class ;
    rdfs:label "Rating" ;
    rdfs:comment "A rating is an evaluation on a numeric scale, such as 1 to 5 stars." ;
    rdfs:subClassOf schema:Intangible .

schema:ReactAction a rdfs:Class ;
    rdfs:label "ReactAction" ;
    rdfs:comment "The act of responding instinctively and emotionally to an object, expressing a sentiment." ;
    rdfs:subClassOf schema:AssessAction .

schema:ReadAction a rdfs:Class ;
    rdfs:label "ReadAction" ;
    rdfs:comment "The act of consuming written content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:RealEstateAgent a rdfs:Class ;
    rdfs:label "RealEstateAgent" ;
    rdfs:comment "A real-estate agent." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:RealEstateListing a rdfs:Class ;
    rdfs:label "RealEstateListing" ;
    rdfs:comment """A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
  The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
  """ ;
    rdfs:subClassOf schema:WebPage ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2348> .

schema:ReceiveAction a rdfs:Class ;
    rdfs:label "ReceiveAction" ;
    rdfs:comment "The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[SendAction]]: The reciprocal of ReceiveAction.\\\\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine)." ;
    rdfs:subClassOf schema:TransferAction .

schema:Recipe a rdfs:Class ;
    rdfs:label "Recipe" ;
    rdfs:comment "A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail." ;
    rdfs:subClassOf schema:HowTo .

schema:Recommendation a rdfs:Class ;
    rdfs:label "Recommendation" ;
    rdfs:comment "[[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s." ;
    rdfs:subClassOf schema:Review ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2405> .

schema:RecommendedDoseSchedule a rdfs:Class ;
    rdfs:label "RecommendedDoseSchedule" ;
    rdfs:comment "A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity." ;
    rdfs:subClassOf schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RecyclingCenter a rdfs:Class ;
    rdfs:label "RecyclingCenter" ;
    rdfs:comment "A recycling center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:RefundTypeEnumeration a rdfs:Class ;
    rdfs:label "RefundTypeEnumeration" ;
    rdfs:comment "RefundTypeEnumeration enumerates several kinds of product return refund types." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:RegisterAction a rdfs:Class ;
    rdfs:label "RegisterAction" ;
    rdfs:comment "The act of registering to be a user of a service, product or web page.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\\\\n* [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\\\\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object." ;
    rdfs:subClassOf schema:InteractAction .

schema:RejectAction a rdfs:Class ;
    rdfs:label "RejectAction" ;
    rdfs:comment "The act of rejecting to/adopting an object.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[AcceptAction]]: The antonym of RejectAction." ;
    rdfs:subClassOf schema:AllocateAction .

schema:RentAction a rdfs:Class ;
    rdfs:label "RentAction" ;
    rdfs:comment "The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment." ;
    rdfs:subClassOf schema:TradeAction .

schema:RentalCarReservation a rdfs:Class ;
    rdfs:label "RentalCarReservation" ;
    rdfs:comment "A reservation for a rental car.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations." ;
    rdfs:subClassOf schema:Reservation .

schema:RepaymentSpecification a rdfs:Class ;
    rdfs:label "RepaymentSpecification" ;
    rdfs:comment "A structured value representing repayment." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:ReplaceAction a rdfs:Class ;
    rdfs:label "ReplaceAction" ;
    rdfs:comment "The act of editing a recipient by replacing an old object with a new object." ;
    rdfs:subClassOf schema:UpdateAction .

schema:ReplyAction a rdfs:Class ;
    rdfs:label "ReplyAction" ;
    rdfs:comment "The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\\\\n\\\\nRelated actions:\\\\n\\\\n* [[AskAction]]: Appears generally as an origin of a ReplyAction." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:Report a rdfs:Class ;
    rdfs:label "Report" ;
    rdfs:comment "A Report generated by governmental or non-governmental organization." ;
    rdfs:subClassOf schema:Article .

schema:ReportageNewsArticle a rdfs:Class ;
    rdfs:label "ReportageNewsArticle" ;
    rdfs:comment """The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing
 news articles which are the result of journalistic news reporting conventions.

In practice many news publishers produce a wide variety of article types, many of which might be considered a [[NewsArticle]] but not a [[ReportageNewsArticle]]. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.

The [[ReportageNewsArticle]] type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources.  This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda).  News reports in the [[ReportageNewsArticle]] sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.

A [[ReportageNewsArticle]] which goes deeper into analysis can also be marked with an additional type of [[AnalysisNewsArticle]].
""" ;
    rdfs:subClassOf schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:ReportedDoseSchedule a rdfs:Class ;
    rdfs:label "ReportedDoseSchedule" ;
    rdfs:comment "A patient-reported or observed dosing schedule for a drug or supplement." ;
    rdfs:subClassOf schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ResearchProject a rdfs:Class ;
    rdfs:label "ResearchProject" ;
    rdfs:comment "A Research project." ;
    rdfs:subClassOf schema:Project ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab> .

schema:Researcher a rdfs:Class ;
    rdfs:label "Researcher" ;
    rdfs:comment "Researchers." ;
    rdfs:subClassOf schema:Audience .

schema:Reservation a rdfs:Class ;
    rdfs:label "Reservation" ;
    rdfs:comment "Describes a reservation for travel, dining or an event. Some reservations require tickets. \\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]]." ;
    rdfs:subClassOf schema:Intangible .

schema:ReservationPackage a rdfs:Class ;
    rdfs:label "ReservationPackage" ;
    rdfs:comment "A group of multiple reservations with common values for all sub-reservations." ;
    rdfs:subClassOf schema:Reservation .

schema:ReservationStatusType a rdfs:Class ;
    rdfs:label "ReservationStatusType" ;
    rdfs:comment "Enumerated status values for Reservation." ;
    rdfs:subClassOf schema:StatusEnumeration .

schema:ReserveAction a rdfs:Class ;
    rdfs:label "ReserveAction" ;
    rdfs:comment "Reserving a concrete object.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation." ;
    rdfs:subClassOf schema:PlanAction .

schema:Reservoir a rdfs:Class ;
    rdfs:label "Reservoir" ;
    rdfs:comment "A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Residence a rdfs:Class ;
    rdfs:label "Residence" ;
    rdfs:comment "The place where a person lives." ;
    rdfs:subClassOf schema:Place .

schema:Resort a rdfs:Class ;
    rdfs:label "Resort" ;
    rdfs:comment """A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
    """ ;
    rdfs:subClassOf schema:LodgingBusiness ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:Restaurant a rdfs:Class ;
    rdfs:label "Restaurant" ;
    rdfs:comment "A restaurant." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:RestrictedDiet a rdfs:Class ;
    rdfs:label "RestrictedDiet" ;
    rdfs:comment "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. " ;
    rdfs:subClassOf schema:Enumeration .

schema:ResumeAction a rdfs:Class ;
    rdfs:label "ResumeAction" ;
    rdfs:comment "The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer)." ;
    rdfs:subClassOf schema:ControlAction .

schema:ReturnAction a rdfs:Class ;
    rdfs:label "ReturnAction" ;
    rdfs:comment "The act of returning to the origin that which was previously received (concrete objects) or taken (ownership)." ;
    rdfs:subClassOf schema:TransferAction .

schema:ReturnFeesEnumeration a rdfs:Class ;
    rdfs:label "ReturnFeesEnumeration" ;
    rdfs:comment "ReturnFeesEnumeration expresses policies for return fees." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Review a rdfs:Class ;
    rdfs:label "Review" ;
    rdfs:comment "A review of an item - for example, of a restaurant, movie, or store." ;
    rdfs:subClassOf schema:CreativeWork .

schema:ReviewAction a rdfs:Class ;
    rdfs:label "ReviewAction" ;
    rdfs:comment "The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review." ;
    rdfs:subClassOf schema:AssessAction .

schema:ReviewNewsArticle a rdfs:Class ;
    rdfs:label "ReviewNewsArticle" ;
    rdfs:comment "A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work." ;
    rdfs:subClassOf schema:CriticReview,
        schema:NewsArticle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:RiverBodyOfWater a rdfs:Class ;
    rdfs:label "RiverBodyOfWater" ;
    rdfs:comment "A river (for example, the broad majestic Shannon)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:Role a rdfs:Class ;
    rdfs:label "Role" ;
    rdfs:comment "Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\\\\n\\\\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html)." ;
    rdfs:subClassOf schema:Intangible .

schema:RoofingContractor a rdfs:Class ;
    rdfs:label "RoofingContractor" ;
    rdfs:comment "A roofing contractor." ;
    rdfs:subClassOf schema:HomeAndConstructionBusiness .

schema:Room a rdfs:Class ;
    rdfs:label "Room" ;
    rdfs:comment """A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:Accommodation ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:RsvpAction a rdfs:Class ;
    rdfs:label "RsvpAction" ;
    rdfs:comment "The act of notifying an event organizer as to whether you expect to attend the event." ;
    rdfs:subClassOf schema:InformAction .

schema:RsvpResponseType a rdfs:Class ;
    rdfs:label "RsvpResponseType" ;
    rdfs:comment "RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request." ;
    rdfs:subClassOf schema:Enumeration .

schema:SaleEvent a rdfs:Class ;
    rdfs:label "SaleEvent" ;
    rdfs:comment "Event type: Sales event." ;
    rdfs:subClassOf schema:Event .

schema:SatiricalArticle a rdfs:Class ;
    rdfs:label "SatiricalArticle" ;
    rdfs:comment "An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a [[NewsArticle]]. [[ScholarlyArticle]]s are also sometimes satirized." ;
    rdfs:subClassOf schema:Article ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:Schedule a rdfs:Class ;
    rdfs:label "Schedule" ;
    rdfs:comment """A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely.
      This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
      have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.""" ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:ScheduleAction a rdfs:Class ;
    rdfs:label "ScheduleAction" ;
    rdfs:comment "Scheduling future actions, events, or tasks.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation." ;
    rdfs:subClassOf schema:PlanAction .

schema:ScholarlyArticle a rdfs:Class ;
    rdfs:label "ScholarlyArticle" ;
    rdfs:comment "A scholarly article." ;
    rdfs:subClassOf schema:Article .

schema:School a rdfs:Class ;
    rdfs:label "School" ;
    rdfs:comment "A school." ;
    rdfs:subClassOf schema:EducationalOrganization .

schema:SchoolDistrict a rdfs:Class ;
    rdfs:label "SchoolDistrict" ;
    rdfs:comment "A School District is an administrative area for the administration of schools." ;
    rdfs:subClassOf schema:AdministrativeArea ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2500> .

schema:ScreeningEvent a rdfs:Class ;
    rdfs:label "ScreeningEvent" ;
    rdfs:comment "A screening of a movie or other video." ;
    rdfs:subClassOf schema:Event .

schema:Sculpture a rdfs:Class ;
    rdfs:label "Sculpture" ;
    rdfs:comment "A piece of sculpture." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SeaBodyOfWater a rdfs:Class ;
    rdfs:label "SeaBodyOfWater" ;
    rdfs:comment "A sea (for example, the Caspian sea)." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:SearchAction a rdfs:Class ;
    rdfs:label "SearchAction" ;
    rdfs:comment "The act of searching for an object.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily." ;
    rdfs:subClassOf schema:Action .

schema:SearchResultsPage a rdfs:Class ;
    rdfs:label "SearchResultsPage" ;
    rdfs:comment "Web page type: Search results page." ;
    rdfs:subClassOf schema:WebPage .

schema:Season a rdfs:Class ;
    rdfs:label "Season" ;
    rdfs:comment "A media season e.g. tv, radio, video game etc." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:supersededBy schema:CreativeWorkSeason .

schema:Seat a rdfs:Class ;
    rdfs:label "Seat" ;
    rdfs:comment "Used to describe a seat, such as a reserved seat in an event reservation." ;
    rdfs:subClassOf schema:Intangible .

schema:SeekToAction a rdfs:Class ;
    rdfs:label "SeekToAction" ;
    rdfs:comment "This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure." ;
    rdfs:subClassOf schema:Action ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2722> .

schema:SelfStorage a rdfs:Class ;
    rdfs:label "SelfStorage" ;
    rdfs:comment "A self-storage facility." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:SellAction a rdfs:Class ;
    rdfs:label "SellAction" ;
    rdfs:comment "The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction." ;
    rdfs:subClassOf schema:TradeAction .

schema:SendAction a rdfs:Class ;
    rdfs:label "SendAction" ;
    rdfs:comment "The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\\\\n\\\\n* [[ReceiveAction]]: The reciprocal of SendAction.\\\\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you)." ;
    rdfs:subClassOf schema:TransferAction .

schema:Series a rdfs:Class ;
    rdfs:label "Series" ;
    rdfs:comment "A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]]." ;
    rdfs:subClassOf schema:Intangible .

schema:Service a rdfs:Class ;
    rdfs:label "Service" ;
    rdfs:comment "A service provided by an organization, e.g. delivery service, print services, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:ServiceChannel a rdfs:Class ;
    rdfs:label "ServiceChannel" ;
    rdfs:comment "A means for accessing a service, e.g. a government office location, web site, or phone number." ;
    rdfs:subClassOf schema:Intangible .

schema:ShareAction a rdfs:Class ;
    rdfs:label "ShareAction" ;
    rdfs:comment "The act of distributing content to people for their amusement or edification." ;
    rdfs:subClassOf schema:CommunicateAction .

schema:SheetMusic a rdfs:Class ;
    rdfs:label "SheetMusic" ;
    rdfs:comment "Printed music, as opposed to performed or recorded music." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1448> .

schema:ShippingDeliveryTime a rdfs:Class ;
    rdfs:label "ShippingDeliveryTime" ;
    rdfs:comment "ShippingDeliveryTime provides various pieces of information about delivery times for shipping." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:ShippingRateSettings a rdfs:Class ;
    rdfs:label "ShippingRateSettings" ;
    rdfs:comment "A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]]." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:ShoeStore a rdfs:Class ;
    rdfs:label "ShoeStore" ;
    rdfs:comment "A shoe store." ;
    rdfs:subClassOf schema:Store .

schema:ShoppingCenter a rdfs:Class ;
    rdfs:label "ShoppingCenter" ;
    rdfs:comment "A shopping center or mall." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:ShortStory a rdfs:Class ;
    rdfs:label "ShortStory" ;
    rdfs:comment "Short story or tale. A brief work of literature, usually written in narrative prose." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1976> .

schema:SingleFamilyResidence a rdfs:Class ;
    rdfs:label "SingleFamilyResidence" ;
    rdfs:comment "Residence type: Single-family home." ;
    rdfs:subClassOf schema:House .

schema:SiteNavigationElement a rdfs:Class ;
    rdfs:label "SiteNavigationElement" ;
    rdfs:comment "A navigation element of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:SizeGroupEnumeration a rdfs:Class ;
    rdfs:label "SizeGroupEnumeration" ;
    rdfs:comment "Enumerates common size groups for various product categories." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:SizeSpecification a rdfs:Class ;
    rdfs:label "SizeSpecification" ;
    rdfs:comment "Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]])." ;
    rdfs:subClassOf schema:QualitativeValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:SizeSystemEnumeration a rdfs:Class ;
    rdfs:label "SizeSystemEnumeration" ;
    rdfs:comment "Enumerates common size systems for different categories of products, for example \\"EN-13402\\" or \\"UK\\" for wearables or \\"Imperial\\" for screws." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:SkiResort a rdfs:Class ;
    rdfs:label "SkiResort" ;
    rdfs:comment "A ski resort." ;
    rdfs:subClassOf schema:Resort,
        schema:SportsActivityLocation .

schema:SocialEvent a rdfs:Class ;
    rdfs:label "SocialEvent" ;
    rdfs:comment "Event type: Social event." ;
    rdfs:subClassOf schema:Event .

schema:SocialMediaPosting a rdfs:Class ;
    rdfs:label "SocialMediaPosting" ;
    rdfs:comment "A post to a social media platform, including blog posts, tweets, Facebook posts, etc." ;
    rdfs:subClassOf schema:Article .

schema:SoftwareApplication a rdfs:Class ;
    rdfs:label "SoftwareApplication" ;
    rdfs:comment "A software application." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SoftwareSourceCode a rdfs:Class ;
    rdfs:label "SoftwareSourceCode" ;
    rdfs:comment "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates." ;
    rdfs:subClassOf schema:CreativeWork .

schema:SolveMathAction a rdfs:Class ;
    rdfs:label "SolveMathAction" ;
    rdfs:comment "The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression." ;
    rdfs:subClassOf schema:Action ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2740> .

schema:SomeProducts a rdfs:Class ;
    rdfs:label "SomeProducts" ;
    rdfs:comment "A placeholder for multiple similar products of the same kind." ;
    rdfs:subClassOf schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:SpeakableSpecification a rdfs:Class ;
    rdfs:label "SpeakableSpecification" ;
    rdfs:comment "A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1389> .

schema:SpecialAnnouncement a rdfs:Class ;
    rdfs:label "SpecialAnnouncement" ;
    rdfs:comment """A SpecialAnnouncement combines a simple date-stamped textual information update
      with contextualized Web links and other structured data.  It represents an information update made by a
      locally-oriented organization, for example schools, pharmacies, healthcare providers,  community groups, police,
      local government.

For work in progress guidelines on Coronavirus-related markup see [this doc](https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit#).

The motivating scenario for SpecialAnnouncement is the [Coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), and the initial vocabulary is oriented to this urgent situation. Schema.org
expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our
usual [Github entry](https://github.com/schemaorg/schemaorg/issues/2490), feedback comments can also be provided in [this document](https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit#).


While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like [CAP](https://en.wikipedia.org/wiki/Common_Alerting_Protocol), although there may be overlaps. The intent is to cover
the kinds of everyday practical information being posted to existing websites during an emergency situation.

Several kinds of information can be provided:

We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and
"url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known
URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\\\\_coronavirus\\\\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".

For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a [[WebContent]] type, and provide the url as a property of that, alongside at least a simple "[[text]]" summary of the page. It is
unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.

We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, [[openingHours]], [[Event]], [[FAQPage]] etc. By linking to those pages from a [[SpecialAnnouncement]] you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the [[category]] property of the [[SpecialAnnouncement]].

Many [[SpecialAnnouncement]]s will relate to particular regions and to identifiable local organizations. Use [[spatialCoverage]] for the region, and [[announcementLocation]] to indicate specific [[LocalBusiness]]es and [[CivicStructure]]s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both [[spatialCoverage]] and [[announcementLocation]].

The [[about]] property can be used to indicate entities that are the focus of the announcement. We now recommend using [[about]] only
for representing non-location entities (e.g. a [[Course]] or a [[RadioStation]]). For places, use [[announcementLocation]] and [[spatialCoverage]]. Consumers of this markup should be aware that the initial design encouraged the use of /about for locations too.

The basic content of [[SpecialAnnouncement]] is similar to that of an [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed. For publishers without such feeds, basic feed-like information can be shared by posting
[[SpecialAnnouncement]] updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed
with the [[webFeed]] property. This can be a simple URL, or an inline [[DataFeed]] object, with [[encodingFormat]] providing
media type information e.g. "application/rss+xml" or "application/atom+xml".
""" ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:Specialty a rdfs:Class ;
    rdfs:label "Specialty" ;
    rdfs:comment "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort." ;
    rdfs:subClassOf schema:Enumeration .

schema:SportingGoodsStore a rdfs:Class ;
    rdfs:label "SportingGoodsStore" ;
    rdfs:comment "A sporting goods store." ;
    rdfs:subClassOf schema:Store .

schema:SportsActivityLocation a rdfs:Class ;
    rdfs:label "SportsActivityLocation" ;
    rdfs:comment "A sports location, such as a playing field." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:SportsClub a rdfs:Class ;
    rdfs:label "SportsClub" ;
    rdfs:comment "A sports club." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:SportsEvent a rdfs:Class ;
    rdfs:label "SportsEvent" ;
    rdfs:comment "Event type: Sports event." ;
    rdfs:subClassOf schema:Event .

schema:SportsOrganization a rdfs:Class ;
    rdfs:label "SportsOrganization" ;
    rdfs:comment "Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations." ;
    rdfs:subClassOf schema:Organization .

schema:SportsTeam a rdfs:Class ;
    rdfs:label "SportsTeam" ;
    rdfs:comment "Organization: Sports team." ;
    rdfs:subClassOf schema:SportsOrganization .

schema:SpreadsheetDigitalDocument a rdfs:Class ;
    rdfs:label "SpreadsheetDigitalDocument" ;
    rdfs:comment "A spreadsheet file." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:StadiumOrArena a rdfs:Class ;
    rdfs:label "StadiumOrArena" ;
    rdfs:comment "A stadium." ;
    rdfs:subClassOf schema:CivicStructure,
        schema:SportsActivityLocation .

schema:State a rdfs:Class ;
    rdfs:label "State" ;
    rdfs:comment "A state or province of a country." ;
    rdfs:subClassOf schema:AdministrativeArea .

schema:StatisticalPopulation a rdfs:Class ;
    rdfs:label "StatisticalPopulation" ;
    rdfs:comment """A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property [[populationType]] is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a [[StatisticalPopulation]] representing all [[Person]]s with a [[homeLocation]] of East Podunk California, would be described by applying the appropriate [[homeLocation]] and [[populationType]] properties to a [[StatisticalPopulation]] item that stands for that set of people.
The properties [[numConstraints]] and [[constrainingProperty]] are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical
population, and does not imply that the population consists of people. For example, a [[populationType]] of [[Event]] or [[NewsArticle]] could be used. See also [[Observation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  """ ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:StatusEnumeration a rdfs:Class ;
    rdfs:label "StatusEnumeration" ;
    rdfs:comment "Lists or enumerations dealing with status types." ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2604> .

schema:SteeringPositionValue a rdfs:Class ;
    rdfs:label "SteeringPositionValue" ;
    rdfs:comment "A value indicating a steering position." ;
    rdfs:subClassOf schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Store a rdfs:Class ;
    rdfs:label "Store" ;
    rdfs:comment "A retail good store." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:StructuredValue a rdfs:Class ;
    rdfs:label "StructuredValue" ;
    rdfs:comment "Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing." ;
    rdfs:subClassOf schema:Intangible .

schema:SubscribeAction a rdfs:Class ;
    rdfs:label "SubscribeAction" ;
    rdfs:comment "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\\\\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\\\\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object." ;
    rdfs:subClassOf schema:InteractAction .

schema:Substance a rdfs:Class ;
    rdfs:label "Substance" ;
    rdfs:comment "Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical." ;
    rdfs:subClassOf schema:MedicalEntity ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/105590001> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SubwayStation a rdfs:Class ;
    rdfs:label "SubwayStation" ;
    rdfs:comment "A subway station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Suite a rdfs:Class ;
    rdfs:label "Suite" ;
    rdfs:comment """A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
""" ;
    rdfs:subClassOf schema:Accommodation ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:SuperficialAnatomy a rdfs:Class ;
    rdfs:label "SuperficialAnatomy" ;
    rdfs:comment "Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure)." ;
    rdfs:subClassOf schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SurgicalProcedure a rdfs:Class ;
    rdfs:label "SurgicalProcedure" ;
    rdfs:comment "A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes." ;
    rdfs:subClassOf schema:MedicalProcedure ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/387713003> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SuspendAction a rdfs:Class ;
    rdfs:label "SuspendAction" ;
    rdfs:comment "The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer)." ;
    rdfs:subClassOf schema:ControlAction .

schema:Synagogue a rdfs:Class ;
    rdfs:label "Synagogue" ;
    rdfs:comment "A synagogue." ;
    rdfs:subClassOf schema:PlaceOfWorship .

schema:TVClip a rdfs:Class ;
    rdfs:label "TVClip" ;
    rdfs:comment "A short TV program or a segment/part of a TV program." ;
    rdfs:subClassOf schema:Clip .

schema:TVEpisode a rdfs:Class ;
    rdfs:label "TVEpisode" ;
    rdfs:comment "A TV episode which can be part of a series or season." ;
    rdfs:subClassOf schema:Episode .

schema:TVSeason a rdfs:Class ;
    rdfs:label "TVSeason" ;
    rdfs:comment "Season dedicated to TV broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:CreativeWorkSeason .

schema:TVSeries a rdfs:Class ;
    rdfs:label "TVSeries" ;
    rdfs:comment "CreativeWorkSeries dedicated to TV broadcast and associated online delivery." ;
    rdfs:subClassOf schema:CreativeWork,
        schema:CreativeWorkSeries .

schema:Table a rdfs:Class ;
    rdfs:label "Table" ;
    rdfs:comment "A table on a Web page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:TakeAction a rdfs:Class ;
    rdfs:label "TakeAction" ;
    rdfs:comment "The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[GiveAction]]: The reciprocal of TakeAction.\\\\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered." ;
    rdfs:subClassOf schema:TransferAction .

schema:TattooParlor a rdfs:Class ;
    rdfs:label "TattooParlor" ;
    rdfs:comment "A tattoo parlor." ;
    rdfs:subClassOf schema:HealthAndBeautyBusiness .

schema:Taxi a rdfs:Class ;
    rdfs:label "Taxi" ;
    rdfs:comment "A taxi." ;
    rdfs:subClassOf schema:Service ;
    schema:supersededBy schema:TaxiService .

schema:TaxiReservation a rdfs:Class ;
    rdfs:label "TaxiReservation" ;
    rdfs:comment "A reservation for a taxi.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]." ;
    rdfs:subClassOf schema:Reservation .

schema:TaxiService a rdfs:Class ;
    rdfs:label "TaxiService" ;
    rdfs:comment "A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled." ;
    rdfs:subClassOf schema:Service .

schema:TaxiStand a rdfs:Class ;
    rdfs:label "TaxiStand" ;
    rdfs:comment "A taxi stand." ;
    rdfs:subClassOf schema:CivicStructure .

schema:TechArticle a rdfs:Class ;
    rdfs:label "TechArticle" ;
    rdfs:comment "A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc." ;
    rdfs:subClassOf schema:Article .

schema:TelevisionChannel a rdfs:Class ;
    rdfs:label "TelevisionChannel" ;
    rdfs:comment "A unique instance of a television BroadcastService on a CableOrSatelliteService lineup." ;
    rdfs:subClassOf schema:BroadcastChannel .

schema:TelevisionStation a rdfs:Class ;
    rdfs:label "TelevisionStation" ;
    rdfs:comment "A television station." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:TennisComplex a rdfs:Class ;
    rdfs:label "TennisComplex" ;
    rdfs:comment "A tennis complex." ;
    rdfs:subClassOf schema:SportsActivityLocation .

schema:Text a rdfs:Class,
        schema:DataType ;
    rdfs:label "Text" ;
    rdfs:comment "Data type: Text." .

schema:TextDigitalDocument a rdfs:Class ;
    rdfs:label "TextDigitalDocument" ;
    rdfs:comment "A file composed primarily of text." ;
    rdfs:subClassOf schema:DigitalDocument .

schema:TheaterEvent a rdfs:Class ;
    rdfs:label "TheaterEvent" ;
    rdfs:comment "Event type: Theater performance." ;
    rdfs:subClassOf schema:Event .

schema:TheaterGroup a rdfs:Class ;
    rdfs:label "TheaterGroup" ;
    rdfs:comment "A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre." ;
    rdfs:subClassOf schema:PerformingGroup .

schema:TherapeuticProcedure a rdfs:Class ;
    rdfs:label "TherapeuticProcedure" ;
    rdfs:comment "A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition." ;
    rdfs:subClassOf schema:MedicalProcedure ;
    ns2:equivalentClass <http://purl.bioontology.org/ontology/SNOMEDCT/277132007> ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Thesis a rdfs:Class ;
    rdfs:label "Thesis" ;
    rdfs:comment "A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:source <http://www.productontology.org/id/Thesis> .

schema:Thing a rdfs:Class ;
    rdfs:label "Thing" ;
    rdfs:comment "The most generic type of item." .

schema:Ticket a rdfs:Class ;
    rdfs:label "Ticket" ;
    rdfs:comment "Used to describe a ticket to an event, a flight, a bus ride, etc." ;
    rdfs:subClassOf schema:Intangible .

schema:TieAction a rdfs:Class ;
    rdfs:label "TieAction" ;
    rdfs:comment "The act of reaching a draw in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:Time a rdfs:Class,
        schema:DataType ;
    rdfs:label "Time" ;
    rdfs:comment "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time))." .

schema:TipAction a rdfs:Class ;
    rdfs:label "TipAction" ;
    rdfs:comment "The act of giving money voluntarily to a beneficiary in recognition of services rendered." ;
    rdfs:subClassOf schema:TradeAction .

schema:TireShop a rdfs:Class ;
    rdfs:label "TireShop" ;
    rdfs:comment "A tire shop." ;
    rdfs:subClassOf schema:Store .

schema:TouristAttraction a rdfs:Class ;
    rdfs:label "TouristAttraction" ;
    rdfs:comment "A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)" ;
    rdfs:subClassOf schema:Place ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> .

schema:TouristDestination a rdfs:Class ;
    rdfs:label "TouristDestination" ;
    rdfs:comment """A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
  (See examples below).""" ;
    rdfs:subClassOf schema:Place ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:TouristInformationCenter a rdfs:Class ;
    rdfs:label "TouristInformationCenter" ;
    rdfs:comment "A tourist information center." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:TouristTrip a rdfs:Class ;
    rdfs:label "TouristTrip" ;
    rdfs:comment """A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
  (See examples below).""" ;
    rdfs:subClassOf schema:Trip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:ToyStore a rdfs:Class ;
    rdfs:label "ToyStore" ;
    rdfs:comment "A toy store." ;
    rdfs:subClassOf schema:Store .

schema:TrackAction a rdfs:Class ;
    rdfs:label "TrackAction" ;
    rdfs:comment "An agent tracks an object for updates.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\\\\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects." ;
    rdfs:subClassOf schema:FindAction .

schema:TradeAction a rdfs:Class ;
    rdfs:label "TradeAction" ;
    rdfs:comment "The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment." ;
    rdfs:subClassOf schema:Action .

schema:TrainReservation a rdfs:Class ;
    rdfs:label "TrainReservation" ;
    rdfs:comment "A reservation for train travel.\\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]." ;
    rdfs:subClassOf schema:Reservation .

schema:TrainStation a rdfs:Class ;
    rdfs:label "TrainStation" ;
    rdfs:comment "A train station." ;
    rdfs:subClassOf schema:CivicStructure .

schema:TrainTrip a rdfs:Class ;
    rdfs:label "TrainTrip" ;
    rdfs:comment "A trip on a commercial train line." ;
    rdfs:subClassOf schema:Trip .

schema:TransferAction a rdfs:Class ;
    rdfs:label "TransferAction" ;
    rdfs:comment "The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another." ;
    rdfs:subClassOf schema:Action .

schema:TravelAction a rdfs:Class ;
    rdfs:label "TravelAction" ;
    rdfs:comment "The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants." ;
    rdfs:subClassOf schema:MoveAction .

schema:TravelAgency a rdfs:Class ;
    rdfs:label "TravelAgency" ;
    rdfs:comment "A travel agency." ;
    rdfs:subClassOf schema:LocalBusiness .

schema:TreatmentIndication a rdfs:Class ;
    rdfs:label "TreatmentIndication" ;
    rdfs:comment "An indication for treating an underlying condition, symptom, etc." ;
    rdfs:subClassOf schema:MedicalIndication ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Trip a rdfs:Class ;
    rdfs:label "Trip" ;
    rdfs:comment "A trip or journey. An itinerary of visits to one or more places." ;
    rdfs:subClassOf schema:Intangible ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> .

schema:TypeAndQuantityNode a rdfs:Class ;
    rdfs:label "TypeAndQuantityNode" ;
    rdfs:comment "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:UKNonprofitType a rdfs:Class ;
    rdfs:label "UKNonprofitType" ;
    rdfs:comment "UKNonprofitType: Non-profit organization type originating from the United Kingdom." ;
    rdfs:subClassOf schema:NonprofitType ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:URL a rdfs:Class ;
    rdfs:label "URL" ;
    rdfs:comment "Data type: URL." ;
    rdfs:subClassOf schema:Text .

schema:USNonprofitType a rdfs:Class ;
    rdfs:label "USNonprofitType" ;
    rdfs:comment "USNonprofitType: Non-profit organization type originating from the United States." ;
    rdfs:subClassOf schema:NonprofitType ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:UnRegisterAction a rdfs:Class ;
    rdfs:label "UnRegisterAction" ;
    rdfs:comment "The act of un-registering from a service.\\\\n\\\\nRelated actions:\\\\n\\\\n* [[RegisterAction]]: antonym of UnRegisterAction.\\\\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people." ;
    rdfs:subClassOf schema:InteractAction .

schema:UnitPriceSpecification a rdfs:Class ;
    rdfs:label "UnitPriceSpecification" ;
    rdfs:comment "The price asked for a given offer by the respective organization or person." ;
    rdfs:subClassOf schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:UpdateAction a rdfs:Class ;
    rdfs:label "UpdateAction" ;
    rdfs:comment "The act of managing by changing/editing the state of the object." ;
    rdfs:subClassOf schema:Action .

schema:UseAction a rdfs:Class ;
    rdfs:label "UseAction" ;
    rdfs:comment "The act of applying an object to its intended purpose." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:UserBlocks a rdfs:Class ;
    rdfs:label "UserBlocks" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserCheckins a rdfs:Class ;
    rdfs:label "UserCheckins" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserComments a rdfs:Class ;
    rdfs:label "UserComments" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> ;
    schema:supersededBy schema:InteractionCounter .

schema:UserDownloads a rdfs:Class ;
    rdfs:label "UserDownloads" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserInteraction a rdfs:Class ;
    rdfs:label "UserInteraction" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:Event ;
    schema:supersededBy schema:InteractionCounter .

schema:UserLikes a rdfs:Class ;
    rdfs:label "UserLikes" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserPageVisits a rdfs:Class ;
    rdfs:label "UserPageVisits" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserPlays a rdfs:Class ;
    rdfs:label "UserPlays" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserPlusOnes a rdfs:Class ;
    rdfs:label "UserPlusOnes" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:UserReview a rdfs:Class ;
    rdfs:label "UserReview" ;
    rdfs:comment "A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]]." ;
    rdfs:subClassOf schema:Review ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1589> .

schema:UserTweets a rdfs:Class ;
    rdfs:label "UserTweets" ;
    rdfs:comment "UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]." ;
    rdfs:subClassOf schema:UserInteraction ;
    schema:supersededBy schema:InteractionCounter .

schema:Vehicle a rdfs:Class ;
    rdfs:label "Vehicle" ;
    rdfs:comment "A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space." ;
    rdfs:subClassOf schema:Product .

schema:Vein a rdfs:Class ;
    rdfs:label "Vein" ;
    rdfs:comment "A type of blood vessel that specifically carries blood to the heart." ;
    rdfs:subClassOf schema:Vessel ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Vessel a rdfs:Class ;
    rdfs:label "Vessel" ;
    rdfs:comment "A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body." ;
    rdfs:subClassOf schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:VeterinaryCare a rdfs:Class ;
    rdfs:label "VeterinaryCare" ;
    rdfs:comment "A vet's office." ;
    rdfs:subClassOf schema:MedicalOrganization ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:VideoGallery a rdfs:Class ;
    rdfs:label "VideoGallery" ;
    rdfs:comment "Web page type: Video gallery page." ;
    rdfs:subClassOf schema:MediaGallery .

schema:VideoGame a rdfs:Class ;
    rdfs:label "VideoGame" ;
    rdfs:comment "A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device." ;
    rdfs:subClassOf schema:Game,
        schema:SoftwareApplication .

schema:VideoGameClip a rdfs:Class ;
    rdfs:label "VideoGameClip" ;
    rdfs:comment "A short segment/part of a video game." ;
    rdfs:subClassOf schema:Clip .

schema:VideoGameSeries a rdfs:Class ;
    rdfs:label "VideoGameSeries" ;
    rdfs:comment "A video game series." ;
    rdfs:subClassOf schema:CreativeWorkSeries .

schema:VideoObject a rdfs:Class ;
    rdfs:label "VideoObject" ;
    rdfs:comment "A video file." ;
    rdfs:subClassOf schema:MediaObject ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews> .

schema:ViewAction a rdfs:Class ;
    rdfs:label "ViewAction" ;
    rdfs:comment "The act of consuming static visual content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:VirtualLocation a rdfs:Class ;
    rdfs:label "VirtualLocation" ;
    rdfs:comment "An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world." ;
    rdfs:subClassOf schema:Intangible ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:VisualArtsEvent a rdfs:Class ;
    rdfs:label "VisualArtsEvent" ;
    rdfs:comment "Event type: Visual arts event." ;
    rdfs:subClassOf schema:Event .

schema:VisualArtwork a rdfs:Class ;
    rdfs:label "VisualArtwork" ;
    rdfs:comment "A work of art that is primarily visual in character." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_VisualArtworkClass> .

schema:VitalSign a rdfs:Class ;
    rdfs:label "VitalSign" ;
    rdfs:comment "Vital signs are measures of various physiological functions in order to assess the most basic body functions." ;
    rdfs:subClassOf schema:MedicalSign ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Volcano a rdfs:Class ;
    rdfs:label "Volcano" ;
    rdfs:comment "A volcano, like Fuji san." ;
    rdfs:subClassOf schema:Landform .

schema:VoteAction a rdfs:Class ;
    rdfs:label "VoteAction" ;
    rdfs:comment "The act of expressing a preference from a fixed/finite/structured set of choices/options." ;
    rdfs:subClassOf schema:ChooseAction .

schema:WPAdBlock a rdfs:Class ;
    rdfs:label "WPAdBlock" ;
    rdfs:comment "An advertising section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPFooter a rdfs:Class ;
    rdfs:label "WPFooter" ;
    rdfs:comment "The footer section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPHeader a rdfs:Class ;
    rdfs:label "WPHeader" ;
    rdfs:comment "The header section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WPSideBar a rdfs:Class ;
    rdfs:label "WPSideBar" ;
    rdfs:comment "A sidebar section of the page." ;
    rdfs:subClassOf schema:WebPageElement .

schema:WantAction a rdfs:Class ;
    rdfs:label "WantAction" ;
    rdfs:comment "The act of expressing a desire about the object. An agent wants an object." ;
    rdfs:subClassOf schema:ReactAction .

schema:WarrantyPromise a rdfs:Class ;
    rdfs:label "WarrantyPromise" ;
    rdfs:comment "A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product." ;
    rdfs:subClassOf schema:StructuredValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:WarrantyScope a rdfs:Class ;
    rdfs:label "WarrantyScope" ;
    rdfs:comment """A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#Labor-BringIn\\\\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\\\\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
      """ ;
    rdfs:subClassOf schema:Enumeration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:WatchAction a rdfs:Class ;
    rdfs:label "WatchAction" ;
    rdfs:comment "The act of consuming dynamic/moving visual content." ;
    rdfs:subClassOf schema:ConsumeAction .

schema:Waterfall a rdfs:Class ;
    rdfs:label "Waterfall" ;
    rdfs:comment "A waterfall, like Niagara." ;
    rdfs:subClassOf schema:BodyOfWater .

schema:WearAction a rdfs:Class ;
    rdfs:label "WearAction" ;
    rdfs:comment "The act of dressing oneself in clothing." ;
    rdfs:subClassOf schema:UseAction .

schema:WearableMeasurementTypeEnumeration a rdfs:Class ;
    rdfs:label "WearableMeasurementTypeEnumeration" ;
    rdfs:comment "Enumerates common types of measurement for wearables products." ;
    rdfs:subClassOf schema:MeasurementTypeEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupEnumeration a rdfs:Class ;
    rdfs:label "WearableSizeGroupEnumeration" ;
    rdfs:comment "Enumerates common size groups (also known as \\"size types\\") for wearable products." ;
    rdfs:subClassOf schema:SizeGroupEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemEnumeration a rdfs:Class ;
    rdfs:label "WearableSizeSystemEnumeration" ;
    rdfs:comment "Enumerates common size systems specific for wearable products" ;
    rdfs:subClassOf schema:SizeSystemEnumeration ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WebAPI a rdfs:Class ;
    rdfs:label "WebAPI" ;
    rdfs:comment "An application programming interface accessible over Web/Internet technologies." ;
    rdfs:subClassOf schema:Service ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1423> .

schema:WebApplication a rdfs:Class ;
    rdfs:label "WebApplication" ;
    rdfs:comment "Web applications." ;
    rdfs:subClassOf schema:SoftwareApplication .

schema:WebContent a rdfs:Class ;
    rdfs:label "WebContent" ;
    rdfs:comment "WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The  [[WebContent]] type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types [[WebPage]], [[WebSite]] and [[WebPageElement]] will eventually be declared as subtypes of [[WebContent]])." ;
    rdfs:subClassOf schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2358> .

schema:WebPage a rdfs:Class ;
    rdfs:label "WebPage" ;
    rdfs:comment "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WebPageElement a rdfs:Class ;
    rdfs:label "WebPageElement" ;
    rdfs:comment "A web page element, like a table or an image." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WebSite a rdfs:Class ;
    rdfs:label "WebSite" ;
    rdfs:comment "A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs." ;
    rdfs:subClassOf schema:CreativeWork .

schema:WholesaleStore a rdfs:Class ;
    rdfs:label "WholesaleStore" ;
    rdfs:comment "A wholesale store." ;
    rdfs:subClassOf schema:Store .

schema:WinAction a rdfs:Class ;
    rdfs:label "WinAction" ;
    rdfs:comment "The act of achieving victory in a competitive activity." ;
    rdfs:subClassOf schema:AchieveAction .

schema:Winery a rdfs:Class ;
    rdfs:label "Winery" ;
    rdfs:comment "A winery." ;
    rdfs:subClassOf schema:FoodEstablishment .

schema:WorkBasedProgram a rdfs:Class ;
    rdfs:label "WorkBasedProgram" ;
    rdfs:comment "A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs." ;
    rdfs:subClassOf schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:WorkersUnion a rdfs:Class ;
    rdfs:label "WorkersUnion" ;
    rdfs:comment "A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying." ;
    rdfs:subClassOf schema:Organization ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/243> .

schema:WriteAction a rdfs:Class ;
    rdfs:label "WriteAction" ;
    rdfs:comment "The act of authoring written creative content." ;
    rdfs:subClassOf schema:CreateAction .

schema:XPathType a rdfs:Class ;
    rdfs:label "XPathType" ;
    rdfs:comment "Text representing an XPath (typically but not necessarily version 1.0)." ;
    rdfs:subClassOf schema:Text ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1672> .

schema:Zoo a rdfs:Class ;
    rdfs:label "Zoo" ;
    rdfs:comment "A zoo." ;
    rdfs:subClassOf schema:CivicStructure .

schema:Abdomen a schema:PhysicalExam ;
    rdfs:label "Abdomen" ;
    rdfs:comment "Abdomen clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ActivationFee a schema:PriceComponentTypeEnumeration ;
    rdfs:label "ActivationFee" ;
    rdfs:comment "Represents the activation fee part of the total price for an offered product, for example a cellphone contract." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:ActiveActionStatus a schema:ActionStatusType ;
    rdfs:label "ActiveActionStatus" ;
    rdfs:comment "An in-progress action (e.g, while watching the movie, or driving to a location)." .

schema:ActiveNotRecruiting a schema:MedicalStudyStatus ;
    rdfs:label "ActiveNotRecruiting" ;
    rdfs:comment "Active, but not recruiting new participants." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:AerobicActivity a schema:PhysicalActivityCategory ;
    rdfs:label "AerobicActivity" ;
    rdfs:comment "Physical activity of relatively low intensity that depends primarily on the aerobic energy-generating process; during activity, the aerobic metabolism uses oxygen to adequately meet energy demands during exercise." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:AlbumRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "AlbumRelease" ;
    rdfs:comment "AlbumRelease." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:AllWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "AllWheelDriveConfiguration" ;
    rdfs:comment "All-wheel Drive is a transmission layout where the engine drives all four wheels." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:AllergiesHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "AllergiesHealthAspect" ;
    rdfs:comment "Content about the allergy-related aspects of a health topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:AnaerobicActivity a schema:PhysicalActivityCategory ;
    rdfs:label "AnaerobicActivity" ;
    rdfs:comment "Physical activity that is of high-intensity which utilizes the anaerobic metabolism of the body." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Anesthesia a schema:MedicalSpecialty ;
    rdfs:label "Anesthesia" ;
    rdfs:comment "A specific branch of medical science that pertains to study of anesthetics and their application." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Appearance a schema:PhysicalExam ;
    rdfs:label "Appearance" ;
    rdfs:comment "Appearance assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:AudiobookFormat a schema:BookFormatType ;
    rdfs:label "AudiobookFormat" ;
    rdfs:comment "Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties." .

schema:AuthoritativeLegalValue a schema:LegalValueLevel ;
    rdfs:label "AuthoritativeLegalValue" ;
    rdfs:comment "Indicates that the publisher gives some special status to the publication of the document. (\\"The Queens Printer\\" version of a UK Act of Parliament, or the PDF version of a Directive published by the EU Office of Publications). Something \\"Authoritative\\" is considered to be also [[OfficialLegalValue]]\\"." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#LegalValue-authoritative> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:Ayurvedic a schema:MedicineSystem ;
    rdfs:label "Ayurvedic" ;
    rdfs:comment "A system of medicine that originated in India over thousands of years and that focuses on integrating and balancing the body, mind, and spirit." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:BackOrder a schema:ItemAvailability ;
    rdfs:label "BackOrder" ;
    rdfs:comment "Indicates that the item is available on back order." .

schema:Bacteria a schema:InfectiousAgentClass ;
    rdfs:label "Bacteria" ;
    rdfs:comment "Pathogenic bacteria that cause bacterial infection." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Balance a schema:PhysicalActivityCategory ;
    rdfs:label "Balance" ;
    rdfs:comment "Physical activity that is engaged to help maintain posture and balance." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:BasicIncome a schema:GovernmentBenefitsType ;
    rdfs:label "BasicIncome" ;
    rdfs:comment "BasicIncome: this is a benefit for basic income." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:BenefitsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "BenefitsHealthAspect" ;
    rdfs:comment "Content about the benefits and advantages of usage or utilization of topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:BodyMeasurementArm a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementArm" ;
    rdfs:comment "Arm length (measured between arms/shoulder line intersection and the prominent wrist bone). Used, for example, to fit shirts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementBust a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementBust" ;
    rdfs:comment "Maximum girth of bust. Used, for example, to fit women's suits." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementChest a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementChest" ;
    rdfs:comment "Maximum girth of chest. Used, for example, to fit men's suits." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementFoot a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementFoot" ;
    rdfs:comment "Foot length (measured between end of the most prominent toe and the most prominent part of the heel). Used, for example, to measure socks." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementHand a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementHand" ;
    rdfs:comment "Maximum hand girth (measured over the knuckles of the open right hand excluding thumb, fingers together). Used, for example, to fit gloves." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementHead a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementHead" ;
    rdfs:comment "Maximum girth of head above the ears. Used, for example, to fit hats." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementHeight a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementHeight" ;
    rdfs:comment "Body height (measured between crown of head and soles of feet). Used, for example, to fit jackets." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementHips a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementHips" ;
    rdfs:comment "Girth of hips (measured around the buttocks). Used, for example, to fit skirts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementInsideLeg a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementInsideLeg" ;
    rdfs:comment "Inside leg (measured between crotch and soles of feet). Used, for example, to fit pants." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementNeck a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementNeck" ;
    rdfs:comment "Girth of neck. Used, for example, to fit shirts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementUnderbust a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementUnderbust" ;
    rdfs:comment "Girth of body just below the bust. Used, for example, to fit women's swimwear." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementWaist a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementWaist" ;
    rdfs:comment "Girth of natural waistline (between hip bones and lower ribs). Used, for example, to fit pants." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BodyMeasurementWeight a schema:BodyMeasurementTypeEnumeration ;
    rdfs:label "BodyMeasurementWeight" ;
    rdfs:comment "Body weight. Used, for example, to measure pantyhose." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:BroadcastRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "BroadcastRelease" ;
    rdfs:comment "BroadcastRelease." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:BusinessSupport a schema:GovernmentBenefitsType ;
    rdfs:label "BusinessSupport" ;
    rdfs:comment "BusinessSupport: this is a benefit for supporting businesses." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:CDFormat a schema:MusicReleaseFormatType ;
    rdfs:label "CDFormat" ;
    rdfs:comment "CDFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:CT a schema:MedicalImagingTechnique ;
    rdfs:label "CT" ;
    rdfs:comment "X-ray computed tomography imaging." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Cardiovascular a schema:MedicalSpecialty ;
    rdfs:label "Cardiovascular" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of heart and vasculature." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CardiovascularExam a schema:PhysicalExam ;
    rdfs:label "CardiovascularExam" ;
    rdfs:comment "Cardiovascular system assessment withclinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CaseSeries a schema:MedicalObservationalStudyDesign ;
    rdfs:label "CaseSeries" ;
    rdfs:comment "A case series (also known as a clinical series) is a medical research study that tracks patients with a known exposure given similar treatment or examines their medical records for exposure and outcome. A case series can be retrospective or prospective and usually involves a smaller number of patients than the more powerful case-control studies or randomized controlled trials. Case series may be consecutive or non-consecutive, depending on whether all cases presenting to the reporting authors over a period of time were included, or only a selection." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CassetteFormat a schema:MusicReleaseFormatType ;
    rdfs:label "CassetteFormat" ;
    rdfs:comment "CassetteFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:CausesHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "CausesHealthAspect" ;
    rdfs:comment "Information about the causes and main actions that gave rise to the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:CharitableIncorporatedOrganization a schema:UKNonprofitType ;
    rdfs:label "CharitableIncorporatedOrganization" ;
    rdfs:comment "CharitableIncorporatedOrganization: Non-profit type referring to a Charitable Incorporated Organization (UK)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Chiropractic a schema:MedicineSystem ;
    rdfs:label "Chiropractic" ;
    rdfs:comment "A system of medicine focused on the relationship between the body's structure, mainly the spine, and its functioning." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CleaningFee a schema:PriceComponentTypeEnumeration ;
    rdfs:label "CleaningFee" ;
    rdfs:comment "Represents the cleaning fee part of the total price for an offered product, for example a vacation rental." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:Clinician a schema:MedicalAudienceType ;
    rdfs:label "Clinician" ;
    rdfs:comment "Medical clinicians, including practicing physicians and other medical professionals involved in clinical practice." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CoOp a schema:GamePlayMode ;
    rdfs:label "CoOp" ;
    rdfs:comment "Play mode: CoOp. Co-operative games, where you play on the same team with friends." .

schema:CohortStudy a schema:MedicalObservationalStudyDesign ;
    rdfs:label "CohortStudy" ;
    rdfs:comment "Also known as a panel study. A cohort study is a form of longitudinal study used in medicine and social science. It is one type of study design and should be compared with a cross-sectional study.  A cohort is a group of people who share a common characteristic or experience within a defined period (e.g., are born, leave school, lose their job, are exposed to a drug or a vaccine, etc.). The comparison group may be the general population from which the cohort is drawn, or it may be another cohort of persons thought to have had little or no exposure to the substance under investigation, but otherwise similar. Alternatively, subgroups within the cohort may be compared with each other." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CommentPermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "CommentPermission" ;
    rdfs:comment "Permission to add comments to the document." .

schema:CommunityHealth a schema:MedicalSpecialty ;
    rdfs:label "CommunityHealth" ;
    rdfs:comment "A field of public health focusing on improving health characteristics of a defined population in relation with their geographical or environment areas." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CompilationAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "CompilationAlbum" ;
    rdfs:comment "CompilationAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Completed a schema:MedicalStudyStatus ;
    rdfs:label "Completed" ;
    rdfs:comment "Completed." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:CompletedActionStatus a schema:ActionStatusType ;
    rdfs:label "CompletedActionStatus" ;
    rdfs:comment "An action that has already taken place." .

schema:ContagiousnessHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "ContagiousnessHealthAspect" ;
    rdfs:comment "Content about contagion mechanisms and contagiousness information over the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:CrossSectional a schema:MedicalObservationalStudyDesign ;
    rdfs:label "CrossSectional" ;
    rdfs:comment "Studies carried out on pre-existing data (usually from 'snapshot' surveys), such as that collected by the Census Bureau. Sometimes called Prevalence Studies." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DJMixAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "DJMixAlbum" ;
    rdfs:comment "DJMixAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:DVDFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DVDFormat" ;
    rdfs:comment "DVDFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:DamagedCondition a schema:OfferItemCondition ;
    rdfs:label "DamagedCondition" ;
    rdfs:comment "Indicates that the item is damaged." .

schema:DecontextualizedContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "DecontextualizedContent" ;
    rdfs:comment """Content coded 'missing context' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'missing context': Presenting unaltered video in an inaccurate manner that misrepresents the footage. For example, using incorrect dates or locations, altering the transcript or sharing brief clips from a longer video to mislead viewers. (A video rated 'original' can also be missing context.)

For an [[ImageObject]] to be 'missing context': Presenting unaltered images in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An image rated 'original' can also be missing context.)

For an [[ImageObject]] with embedded text to be 'missing context': An unaltered image presented in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An 'original' image with inaccurate text would generally fall in this category.)

For an [[AudioObject]] to be 'missing context': Unaltered audio presented in an inaccurate manner that misrepresents it. For example, using incorrect dates or locations, or sharing brief clips from a longer recording to mislead viewers. (Audio rated â€œoriginalâ€ can also be missing context.)
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:DefinitiveLegalValue a schema:LegalValueLevel ;
    rdfs:label "DefinitiveLegalValue" ;
    rdfs:comment """Indicates a document for which the text is conclusively what the law says and is legally binding. (e.g. The digitally signed version of an Official Journal.)
  Something "Definitive" is considered to be also [[AuthoritativeLegalValue]].""" ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#LegalValue-definitive> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:DemoAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "DemoAlbum" ;
    rdfs:comment "DemoAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Dentistry a schema:MedicalSpecialty ;
    rdfs:label "Dentistry" ;
    rdfs:comment "A branch of medicine that is involved in the dental care." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Dermatologic a schema:MedicalSpecialty ;
    rdfs:label "Dermatologic" ;
    rdfs:comment "Something relating to or practicing dermatology." ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:supersededBy schema:Dermatology .

schema:DiabeticDiet a schema:RestrictedDiet ;
    rdfs:label "DiabeticDiet" ;
    rdfs:comment "A diet appropriate for people with diabetes." .

schema:Diagnostic a schema:MedicalDevicePurpose ;
    rdfs:label "Diagnostic" ;
    rdfs:comment "A medical device used for diagnostic purposes." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DietNutrition a schema:MedicalSpecialty ;
    rdfs:label "DietNutrition" ;
    rdfs:comment "Dietetic and nutrition as a medical specialty." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:DigitalAudioTapeFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DigitalAudioTapeFormat" ;
    rdfs:comment "DigitalAudioTapeFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:DigitalFormat a schema:MusicReleaseFormatType ;
    rdfs:label "DigitalFormat" ;
    rdfs:comment "DigitalFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:DisabilitySupport a schema:GovernmentBenefitsType ;
    rdfs:label "DisabilitySupport" ;
    rdfs:comment "DisabilitySupport: this is a benefit for disability support." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:Discontinued a schema:ItemAvailability ;
    rdfs:label "Discontinued" ;
    rdfs:comment "Indicates that the item has been discontinued." .

schema:DistanceFee a schema:PriceComponentTypeEnumeration ;
    rdfs:label "DistanceFee" ;
    rdfs:comment "Represents the distance fee (e.g., price per km or mile) part of the total price for an offered product, for example a car rental." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:DoubleBlindedTrial a schema:MedicalTrialDesign ;
    rdfs:label "DoubleBlindedTrial" ;
    rdfs:comment "A trial design in which neither the researcher nor the patient knows the details of the treatment the patient was randomly assigned to." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Downpayment a schema:PriceComponentTypeEnumeration ;
    rdfs:label "Downpayment" ;
    rdfs:comment "Represents the downpayment (up-front payment) price component of the total price for an offered product that has additional installment payments." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:DrivingSchoolVehicleUsage a schema:CarUsageType ;
    rdfs:label "DrivingSchoolVehicleUsage" ;
    rdfs:comment "Indicates the usage of the vehicle for driving school." ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:EBook a schema:BookFormatType ;
    rdfs:label "EBook" ;
    rdfs:comment "Book format: Ebook." .

schema:EPRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "EPRelease" ;
    rdfs:comment "EPRelease." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:EUEnergyEfficiencyCategoryA a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryA" ;
    rdfs:comment "Represents EU Energy Efficiency Class A as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryA1Plus a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryA1Plus" ;
    rdfs:comment "Represents EU Energy Efficiency Class A+ as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryA2Plus a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryA2Plus" ;
    rdfs:comment "Represents EU Energy Efficiency Class A++ as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryA3Plus a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryA3Plus" ;
    rdfs:comment "Represents EU Energy Efficiency Class A+++ as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryB a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryB" ;
    rdfs:comment "Represents EU Energy Efficiency Class B as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryC a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryC" ;
    rdfs:comment "Represents EU Energy Efficiency Class C as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryD a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryD" ;
    rdfs:comment "Represents EU Energy Efficiency Class D as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryE a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryE" ;
    rdfs:comment "Represents EU Energy Efficiency Class E as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryF a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryF" ;
    rdfs:comment "Represents EU Energy Efficiency Class F as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EUEnergyEfficiencyCategoryG a schema:EUEnergyEfficiencyEnumeration ;
    rdfs:label "EUEnergyEfficiencyCategoryG" ;
    rdfs:comment "Represents EU Energy Efficiency Class G as defined in EU energy labeling regulations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:Ear a schema:PhysicalExam ;
    rdfs:label "Ear" ;
    rdfs:comment "Ear function assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:EditedOrCroppedContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "EditedOrCroppedContent" ;
    rdfs:comment """Content coded 'edited or cropped content' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'edited or cropped content': The video has been edited or rearranged. This category applies to time edits, including editing multiple videos together to alter the story being told or editing out large portions from a video.

For an [[ImageObject]] to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.

For an [[ImageObject]] with embedded text to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.

For an [[AudioObject]] to be 'edited or cropped content': The audio has been edited or rearranged. This category applies to time edits, including editing multiple audio clips together to alter the story being told or editing out large portions from the recording.
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:EffectivenessHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "EffectivenessHealthAspect" ;
    rdfs:comment "Content about the effectiveness-related aspects of a health topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:Emergency a schema:MedicalSpecialty ;
    rdfs:label "Emergency" ;
    rdfs:comment "A specific branch of medical science that deals with the evaluation and initial treatment of medical conditions caused by trauma or sudden illness." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Endocrine a schema:MedicalSpecialty ;
    rdfs:label "Endocrine" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of endocrine glands and their secretions." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:EnergyStarCertified a schema:EnergyStarEnergyEfficiencyEnumeration ;
    rdfs:label "EnergyStarCertified" ;
    rdfs:comment "Represents EnergyStar certification." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:EnrollingByInvitation a schema:MedicalStudyStatus ;
    rdfs:label "EnrollingByInvitation" ;
    rdfs:comment "Enrolling participants by invitation only." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:EventCancelled a schema:EventStatusType ;
    rdfs:label "EventCancelled" ;
    rdfs:comment "The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s)." .

schema:EventMovedOnline a schema:EventStatusType ;
    rdfs:label "EventMovedOnline" ;
    rdfs:comment "Indicates that the event was changed to allow online participation. See [[eventAttendanceMode]] for specifics of whether it is now fully or partially online." .

schema:EventPostponed a schema:EventStatusType ;
    rdfs:label "EventPostponed" ;
    rdfs:comment "The event has been postponed and no new date has been set. The event's previousStartDate should be set." .

schema:EventRescheduled a schema:EventStatusType ;
    rdfs:label "EventRescheduled" ;
    rdfs:comment "The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated)." .

schema:EventScheduled a schema:EventStatusType ;
    rdfs:label "EventScheduled" ;
    rdfs:comment "The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default." .

schema:EvidenceLevelA a schema:MedicalEvidenceLevel ;
    rdfs:label "EvidenceLevelA" ;
    rdfs:comment "Data derived from multiple randomized clinical trials or meta-analyses." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:EvidenceLevelB a schema:MedicalEvidenceLevel ;
    rdfs:label "EvidenceLevelB" ;
    rdfs:comment "Data derived from a single randomized trial, or nonrandomized studies." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:EvidenceLevelC a schema:MedicalEvidenceLevel ;
    rdfs:label "EvidenceLevelC" ;
    rdfs:comment "Only consensus opinion of experts, case studies, or standard-of-care." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ExchangeRefund a schema:RefundTypeEnumeration ;
    rdfs:label "ExchangeRefund" ;
    rdfs:comment "A ExchangeRefund ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Eye a schema:PhysicalExam ;
    rdfs:label "Eye" ;
    rdfs:comment "Eye or ophtalmological function assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAcategoryA a schema:DrugPregnancyCategory ;
    rdfs:label "FDAcategoryA" ;
    rdfs:comment "A designation by the US FDA signifying that adequate and well-controlled studies have failed to demonstrate a risk to the fetus in the first trimester of pregnancy (and there is no evidence of risk in later trimesters)." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAcategoryB a schema:DrugPregnancyCategory ;
    rdfs:label "FDAcategoryB" ;
    rdfs:comment "A designation by the US FDA signifying that animal reproduction studies have failed to demonstrate a risk to the fetus and there are no adequate and well-controlled studies in pregnant women." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAcategoryC a schema:DrugPregnancyCategory ;
    rdfs:label "FDAcategoryC" ;
    rdfs:comment "A designation by the US FDA signifying that animal reproduction studies have shown an adverse effect on the fetus and there are no adequate and well-controlled studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAcategoryD a schema:DrugPregnancyCategory ;
    rdfs:label "FDAcategoryD" ;
    rdfs:comment "A designation by the US FDA signifying that there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience or studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAcategoryX a schema:DrugPregnancyCategory ;
    rdfs:label "FDAcategoryX" ;
    rdfs:comment "A designation by the US FDA signifying that studies in animals or humans have demonstrated fetal abnormalities and/or there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience, and the risks involved in use of the drug in pregnant women clearly outweigh potential benefits." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FDAnotEvaluated a schema:DrugPregnancyCategory ;
    rdfs:label "FDAnotEvaluated" ;
    rdfs:comment "A designation that the drug in question has not been assigned a pregnancy category designation by the US FDA." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FailedActionStatus a schema:ActionStatusType ;
    rdfs:label "FailedActionStatus" ;
    rdfs:comment "An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure." .

schema:False a schema:Boolean ;
    rdfs:label "False" ;
    rdfs:comment "The boolean value false." .

schema:Female a schema:GenderType ;
    rdfs:label "Female" ;
    rdfs:comment "The female gender." .

schema:Flexibility a schema:PhysicalActivityCategory ;
    rdfs:label "Flexibility" ;
    rdfs:comment "Physical activity that is engaged in to improve joint and muscle flexibility." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:FourWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "FourWheelDriveConfiguration" ;
    rdfs:comment "Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Friday a schema:DayOfWeek ;
    rdfs:label "Friday" ;
    rdfs:comment "The day of the week between Thursday and Saturday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q130> .

schema:FrontWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "FrontWheelDriveConfiguration" ;
    rdfs:comment "Front-wheel drive is a transmission layout where the engine drives the front wheels." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:FullRefund a schema:RefundTypeEnumeration ;
    rdfs:label "FullRefund" ;
    rdfs:comment "A FullRefund ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Fungus a schema:InfectiousAgentClass ;
    rdfs:label "Fungus" ;
    rdfs:comment "Pathogenic fungus." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Gastroenterologic a schema:MedicalSpecialty ;
    rdfs:label "Gastroenterologic" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of digestive system." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Genetic a schema:MedicalSpecialty ;
    rdfs:label "Genetic" ;
    rdfs:comment "A specific branch of medical science that pertains to hereditary transmission and the variation of inherited characteristics and disorders." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Genitourinary a schema:PhysicalExam ;
    rdfs:label "Genitourinary" ;
    rdfs:comment "Genitourinary system function assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Geriatric a schema:MedicalSpecialty ;
    rdfs:label "Geriatric" ;
    rdfs:comment "A specific branch of medical science that is concerned with the diagnosis and treatment of diseases, debilities and provision of care to the aged." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:GettingAccessHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "GettingAccessHealthAspect" ;
    rdfs:comment "Content that discusses practical and policy aspects for getting access to specific kinds of healthcare (e.g. distribution mechanisms for vaccines)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:GlutenFreeDiet a schema:RestrictedDiet ;
    rdfs:label "GlutenFreeDiet" ;
    rdfs:comment "A diet exclusive of gluten." .

schema:GraphicNovel a schema:BookFormatType ;
    rdfs:label "GraphicNovel" ;
    rdfs:comment "Book format: GraphicNovel. May represent a bound collection of ComicIssue instances." ;
    schema:isPartOf <https://bib.schema.org> .

schema:GroupBoardingPolicy a schema:BoardingPolicyType ;
    rdfs:label "GroupBoardingPolicy" ;
    rdfs:comment "The airline boards by groups based on check-in time, priority, etc." .

schema:Gynecologic a schema:MedicalSpecialty ;
    rdfs:label "Gynecologic" ;
    rdfs:comment "A specific branch of medical science that pertains to the health care of women, particularly in the diagnosis and treatment of disorders affecting the female reproductive system." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:HalalDiet a schema:RestrictedDiet ;
    rdfs:label "HalalDiet" ;
    rdfs:comment "A diet conforming to Islamic dietary practices." .

schema:Hardcover a schema:BookFormatType ;
    rdfs:label "Hardcover" ;
    rdfs:comment "Book format: Hardcover." .

schema:Head a schema:PhysicalExam ;
    rdfs:label "Head" ;
    rdfs:comment "Head assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:HealthCare a schema:GovernmentBenefitsType ;
    rdfs:label "HealthCare" ;
    rdfs:comment "HealthCare: this is a benefit for health care." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:HearingImpairedSupported a schema:ContactPointOption ;
    rdfs:label "HearingImpairedSupported" ;
    rdfs:comment "Uses devices to support users with hearing impairments." .

schema:Hematologic a schema:MedicalSpecialty ;
    rdfs:label "Hematologic" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of blood and blood producing organs." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:HinduDiet a schema:RestrictedDiet ;
    rdfs:label "HinduDiet" ;
    rdfs:comment "A diet conforming to Hindu dietary practices, in particular, beef-free." .

schema:Homeopathic a schema:MedicineSystem ;
    rdfs:label "Homeopathic" ;
    rdfs:comment "A system of medicine based on the principle that a disease can be cured by a substance that produces similar symptoms in healthy people." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:HowItWorksHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "HowItWorksHealthAspect" ;
    rdfs:comment "Content that discusses and explains how a particular health-related topic works, e.g. in terms of mechanisms and underlying science." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:HowOrWhereHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "HowOrWhereHealthAspect" ;
    rdfs:comment "Information about how or where to find a topic. Also may contain location data that can be used for where to look for help if the topic is observed." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:InForce a schema:LegalForceStatus ;
    rdfs:label "InForce" ;
    rdfs:comment "Indicates that a legislation is in force." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#InForce-inForce> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:InStock a schema:ItemAvailability ;
    rdfs:label "InStock" ;
    rdfs:comment "Indicates that the item is in stock." .

schema:InStoreOnly a schema:ItemAvailability ;
    rdfs:label "InStoreOnly" ;
    rdfs:comment "Indicates that the item is available only at physical locations." .

schema:Infectious a schema:MedicalSpecialty ;
    rdfs:label "Infectious" ;
    rdfs:comment "Something in medical science that pertains to infectious diseases i.e caused by bacterial, viral, fungal or parasitic infections." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:IngredientsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "IngredientsHealthAspect" ;
    rdfs:comment "Content discussing ingredients-related aspects of a health topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:Installment a schema:PriceComponentTypeEnumeration ;
    rdfs:label "Installment" ;
    rdfs:comment "Represents the installment pricing component of the total price for an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:InternationalTrial a schema:MedicalTrialDesign ;
    rdfs:label "InternationalTrial" ;
    rdfs:comment "An international trial." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:InvoicePrice a schema:PriceTypeEnumeration ;
    rdfs:label "InvoicePrice" ;
    rdfs:comment "Represents the invoice price of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:ItemListOrderAscending a schema:ItemListOrderType ;
    rdfs:label "ItemListOrderAscending" ;
    rdfs:comment "An ItemList ordered with lower values listed first." .

schema:ItemListOrderDescending a schema:ItemListOrderType ;
    rdfs:label "ItemListOrderDescending" ;
    rdfs:comment "An ItemList ordered with higher values listed first." .

schema:ItemListUnordered a schema:ItemListOrderType ;
    rdfs:label "ItemListUnordered" ;
    rdfs:comment "An ItemList ordered with no explicit order." .

schema:KosherDiet a schema:RestrictedDiet ;
    rdfs:label "KosherDiet" ;
    rdfs:comment "A diet conforming to Jewish dietary practices." .

schema:LaboratoryScience a schema:MedicalSpecialty ;
    rdfs:label "LaboratoryScience" ;
    rdfs:comment "A medical science pertaining to chemical, hematological, immunologic, microscopic, or bacteriological diagnostic analyses or research." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:LaserDiscFormat a schema:MusicReleaseFormatType ;
    rdfs:label "LaserDiscFormat" ;
    rdfs:comment "LaserDiscFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:LeftHandDriving a schema:SteeringPositionValue ;
    rdfs:label "LeftHandDriving" ;
    rdfs:comment "The steering position is on the left side of the vehicle (viewed from the main direction of driving)." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:LeisureTimeActivity a schema:PhysicalActivityCategory ;
    rdfs:label "LeisureTimeActivity" ;
    rdfs:comment "Any physical activity engaged in for recreational purposes. Examples may include ballroom dancing, roller skating, canoeing, fishing, etc." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:LimitedAvailability a schema:ItemAvailability ;
    rdfs:label "LimitedAvailability" ;
    rdfs:comment "Indicates that the item has limited availability." .

schema:LimitedByGuaranteeCharity a schema:UKNonprofitType ;
    rdfs:label "LimitedByGuaranteeCharity" ;
    rdfs:comment "LimitedByGuaranteeCharity: Non-profit type referring to a charitable company that is limited by guarantee (UK)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:ListPrice a schema:PriceTypeEnumeration ;
    rdfs:label "ListPrice" ;
    rdfs:comment "Represents the list price (the price a product is actually advertised for) of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:LiveAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "LiveAlbum" ;
    rdfs:comment "LiveAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:LivingWithHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "LivingWithHealthAspect" ;
    rdfs:comment "Information about coping or life related to the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:LockerDelivery a schema:DeliveryMethod ;
    rdfs:label "LockerDelivery" ;
    rdfs:comment "A DeliveryMethod in which an item is made available via locker." .

schema:Longitudinal a schema:MedicalObservationalStudyDesign ;
    rdfs:label "Longitudinal" ;
    rdfs:comment "Unlike cross-sectional studies, longitudinal studies track the same people, and therefore the differences observed in those people are less likely to be the result of cultural differences across generations. Longitudinal studies are also used in medicine to uncover predictors of certain diseases." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:LowCalorieDiet a schema:RestrictedDiet ;
    rdfs:label "LowCalorieDiet" ;
    rdfs:comment "A diet focused on reduced calorie intake." .

schema:LowFatDiet a schema:RestrictedDiet ;
    rdfs:label "LowFatDiet" ;
    rdfs:comment "A diet focused on reduced fat and cholesterol intake." .

schema:LowLactoseDiet a schema:RestrictedDiet ;
    rdfs:label "LowLactoseDiet" ;
    rdfs:comment "A diet appropriate for people with lactose intolerance." .

schema:LowSaltDiet a schema:RestrictedDiet ;
    rdfs:label "LowSaltDiet" ;
    rdfs:comment "A diet focused on reduced sodium intake." .

schema:Lung a schema:PhysicalExam ;
    rdfs:label "Lung" ;
    rdfs:comment "Lung and respiratory system clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MRI a schema:MedicalImagingTechnique ;
    rdfs:label "MRI" ;
    rdfs:comment "Magnetic resonance imaging." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MSRP a schema:PriceTypeEnumeration ;
    rdfs:label "MSRP" ;
    rdfs:comment "Represents the manufacturer suggested retail price (\\"MSRP\\") of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:Male a schema:GenderType ;
    rdfs:label "Male" ;
    rdfs:comment "The male gender." .

schema:MayTreatHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "MayTreatHealthAspect" ;
    rdfs:comment "Related topics may be treated by a Topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:MedicalResearcher a schema:MedicalAudienceType ;
    rdfs:label "MedicalResearcher" ;
    rdfs:comment "Medical researchers." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MerchantReturnFiniteReturnWindow a schema:MerchantReturnEnumeration ;
    rdfs:label "MerchantReturnFiniteReturnWindow" ;
    rdfs:comment "MerchantReturnFiniteReturnWindow: there is a finite window for product returns." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:MerchantReturnNotPermitted a schema:MerchantReturnEnumeration ;
    rdfs:label "MerchantReturnNotPermitted" ;
    rdfs:comment "MerchantReturnNotPermitted: product returns are not permitted." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:MerchantReturnUnlimitedWindow a schema:MerchantReturnEnumeration ;
    rdfs:label "MerchantReturnUnlimitedWindow" ;
    rdfs:comment "MerchantReturnUnlimitedWindow: there is an unlimited window for product returns." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:MerchantReturnUnspecified a schema:MerchantReturnEnumeration ;
    rdfs:label "MerchantReturnUnspecified" ;
    rdfs:comment "MerchantReturnUnspecified: a product return policy is not specified here." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Midwifery a schema:MedicalSpecialty ;
    rdfs:label "Midwifery" ;
    rdfs:comment "A nurse-like health profession that deals with pregnancy, childbirth, and the postpartum period (including care of the newborn), besides sexual and reproductive health of women throughout their lives." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MinimumAdvertisedPrice a schema:PriceTypeEnumeration ;
    rdfs:label "MinimumAdvertisedPrice" ;
    rdfs:comment "Represents the minimum advertised price (\\"MAP\\") (as dictated by the manufacturer) of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:MisconceptionsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "MisconceptionsHealthAspect" ;
    rdfs:comment "Content about common misconceptions and myths that are related to a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:MixedEventAttendanceMode a schema:EventAttendanceModeEnumeration ;
    rdfs:label "MixedEventAttendanceMode" ;
    rdfs:comment "MixedEventAttendanceMode - an event that is conducted as a combination of both offline and online modes." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:MixtapeAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "MixtapeAlbum" ;
    rdfs:comment "MixtapeAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Monday a schema:DayOfWeek ;
    rdfs:label "Monday" ;
    rdfs:comment "The day of the week between Sunday and Tuesday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q105> .

schema:MultiCenterTrial a schema:MedicalTrialDesign ;
    rdfs:label "MultiCenterTrial" ;
    rdfs:comment "A trial that takes place at multiple centers." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MultiPlayer a schema:GamePlayMode ;
    rdfs:label "MultiPlayer" ;
    rdfs:comment "Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously." .

schema:MulticellularParasite a schema:InfectiousAgentClass ;
    rdfs:label "MulticellularParasite" ;
    rdfs:comment "Multicellular parasite that causes an infection." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Musculoskeletal a schema:MedicalSpecialty ;
    rdfs:label "Musculoskeletal" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of muscles, ligaments and skeletal system." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:MusculoskeletalExam a schema:PhysicalExam ;
    rdfs:label "MusculoskeletalExam" ;
    rdfs:comment "Musculoskeletal system clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Neck a schema:PhysicalExam ;
    rdfs:label "Neck" ;
    rdfs:comment "Neck assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Neuro a schema:PhysicalExam ;
    rdfs:label "Neuro" ;
    rdfs:comment "Neurological system clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Neurologic a schema:MedicalSpecialty ;
    rdfs:label "Neurologic" ;
    rdfs:comment "A specific branch of medical science that studies the nerves and nervous system and its respective disease states." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:NewCondition a schema:OfferItemCondition ;
    rdfs:label "NewCondition" ;
    rdfs:comment "Indicates that the item is new." .

schema:NoninvasiveProcedure a schema:MedicalProcedureType ;
    rdfs:label "NoninvasiveProcedure" ;
    rdfs:comment "A type of medical procedure that involves noninvasive techniques." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Nonprofit501a a schema:USNonprofitType ;
    rdfs:label "Nonprofit501a" ;
    rdfs:comment "Nonprofit501a: Non-profit type referring to Farmersâ€™ Cooperative Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c1 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c1" ;
    rdfs:comment "Nonprofit501c1: Non-profit type referring to Corporations Organized Under Act of Congress, including Federal Credit Unions and National Farm Loan Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c10 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c10" ;
    rdfs:comment "Nonprofit501c10: Non-profit type referring to Domestic Fraternal Societies and Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c11 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c11" ;
    rdfs:comment "Nonprofit501c11: Non-profit type referring to Teachers' Retirement Fund Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c12 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c12" ;
    rdfs:comment "Nonprofit501c12: Non-profit type referring to Benevolent Life Insurance Associations, Mutual Ditch or Irrigation Companies, Mutual or Cooperative Telephone Companies." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c13 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c13" ;
    rdfs:comment "Nonprofit501c13: Non-profit type referring to Cemetery Companies." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c14 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c14" ;
    rdfs:comment "Nonprofit501c14: Non-profit type referring to State-Chartered Credit Unions, Mutual Reserve Funds." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c15 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c15" ;
    rdfs:comment "Nonprofit501c15: Non-profit type referring to Mutual Insurance Companies or Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c16 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c16" ;
    rdfs:comment "Nonprofit501c16: Non-profit type referring to Cooperative Organizations to Finance Crop Operations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c17 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c17" ;
    rdfs:comment "Nonprofit501c17: Non-profit type referring to Supplemental Unemployment Benefit Trusts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c18 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c18" ;
    rdfs:comment "Nonprofit501c18: Non-profit type referring to Employee Funded Pension Trust (created before 25 June 1959)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c19 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c19" ;
    rdfs:comment "Nonprofit501c19: Non-profit type referring to Post or Organization of Past or Present Members of the Armed Forces." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c2 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c2" ;
    rdfs:comment "Nonprofit501c2: Non-profit type referring to Title-holding Corporations for Exempt Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c20 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c20" ;
    rdfs:comment "Nonprofit501c20: Non-profit type referring to Group Legal Services Plan Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c21 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c21" ;
    rdfs:comment "Nonprofit501c21: Non-profit type referring to Black Lung Benefit Trusts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c22 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c22" ;
    rdfs:comment "Nonprofit501c22: Non-profit type referring to Withdrawal Liability Payment Funds." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c23 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c23" ;
    rdfs:comment "Nonprofit501c23: Non-profit type referring to Veterans Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c24 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c24" ;
    rdfs:comment "Nonprofit501c24: Non-profit type referring to Section 4049 ERISA Trusts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c25 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c25" ;
    rdfs:comment "Nonprofit501c25: Non-profit type referring to Real Property Title-Holding Corporations or Trusts with Multiple Parents." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c26 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c26" ;
    rdfs:comment "Nonprofit501c26: Non-profit type referring to State-Sponsored Organizations Providing Health Coverage for High-Risk Individuals." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c27 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c27" ;
    rdfs:comment "Nonprofit501c27: Non-profit type referring to State-Sponsored Workers' Compensation Reinsurance Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c28 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c28" ;
    rdfs:comment "Nonprofit501c28: Non-profit type referring to National Railroad Retirement Investment Trusts." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c3 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c3" ;
    rdfs:comment "Nonprofit501c3: Non-profit type referring to Religious, Educational, Charitable, Scientific, Literary, Testing for Public Safety, to Foster National or International Amateur Sports Competition, or Prevention of Cruelty to Children or Animals Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c4 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c4" ;
    rdfs:comment "Nonprofit501c4: Non-profit type referring to Civic Leagues, Social Welfare Organizations, and Local Associations of Employees." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c5 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c5" ;
    rdfs:comment "Nonprofit501c5: Non-profit type referring to Labor, Agricultural and Horticultural Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c6 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c6" ;
    rdfs:comment "Nonprofit501c6: Non-profit type referring to Business Leagues, Chambers of Commerce, Real Estate Boards." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c7 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c7" ;
    rdfs:comment "Nonprofit501c7: Non-profit type referring to Social and Recreational Clubs." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c8 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c8" ;
    rdfs:comment "Nonprofit501c8: Non-profit type referring to Fraternal Beneficiary Societies and Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501c9 a schema:USNonprofitType ;
    rdfs:label "Nonprofit501c9" ;
    rdfs:comment "Nonprofit501c9: Non-profit type referring to Voluntary Employee Beneficiary Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501d a schema:USNonprofitType ;
    rdfs:label "Nonprofit501d" ;
    rdfs:comment "Nonprofit501d: Non-profit type referring to Religious and Apostolic Associations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501e a schema:USNonprofitType ;
    rdfs:label "Nonprofit501e" ;
    rdfs:comment "Nonprofit501e: Non-profit type referring to Cooperative Hospital Service Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501f a schema:USNonprofitType ;
    rdfs:label "Nonprofit501f" ;
    rdfs:comment "Nonprofit501f: Non-profit type referring to Cooperative Service Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501k a schema:USNonprofitType ;
    rdfs:label "Nonprofit501k" ;
    rdfs:comment "Nonprofit501k: Non-profit type referring to Child Care Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501n a schema:USNonprofitType ;
    rdfs:label "Nonprofit501n" ;
    rdfs:comment "Nonprofit501n: Non-profit type referring to Charitable Risk Pools." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit501q a schema:USNonprofitType ;
    rdfs:label "Nonprofit501q" ;
    rdfs:comment "Nonprofit501q: Non-profit type referring to Credit Counseling Organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nonprofit527 a schema:USNonprofitType ;
    rdfs:label "Nonprofit527" ;
    rdfs:comment "Nonprofit527: Non-profit type referring to Political organizations." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:NonprofitANBI a schema:NLNonprofitType ;
    rdfs:label "NonprofitANBI" ;
    rdfs:comment "NonprofitANBI: Non-profit type referring to a Public Benefit Organization (NL)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:NonprofitSBBI a schema:NLNonprofitType ;
    rdfs:label "NonprofitSBBI" ;
    rdfs:comment "NonprofitSBBI: Non-profit type referring to a Social Interest Promoting Institution (NL)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Nose a schema:PhysicalExam ;
    rdfs:label "Nose" ;
    rdfs:comment "Nose function assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:NotInForce a schema:LegalForceStatus ;
    rdfs:label "NotInForce" ;
    rdfs:comment "Indicates that a legislation is currently not in force." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#InForce-notInForce> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:NotYetRecruiting a schema:MedicalStudyStatus ;
    rdfs:label "NotYetRecruiting" ;
    rdfs:comment "Not yet recruiting." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Nursing a schema:MedicalSpecialty ;
    rdfs:label "Nursing" ;
    rdfs:comment "A health profession of a person formally educated and trained in the care of the sick or infirm person." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OTC a schema:DrugPrescriptionStatus ;
    rdfs:label "OTC" ;
    rdfs:comment "The character of a medical substance, typically a medicine, of being available over the counter or not." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Observational a schema:MedicalObservationalStudyDesign ;
    rdfs:label "Observational" ;
    rdfs:comment "An observational study design." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Obstetric a schema:MedicalSpecialty ;
    rdfs:label "Obstetric" ;
    rdfs:comment "A specific branch of medical science that specializes in the care of women during the prenatal and postnatal care and with the delivery of the child." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OccupationalActivity a schema:PhysicalActivityCategory ;
    rdfs:label "OccupationalActivity" ;
    rdfs:comment "Any physical activity engaged in for job-related purposes. Examples may include waiting tables, maid service, carrying a mailbag, picking fruits or vegetables, construction work, etc." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OfficialLegalValue a schema:LegalValueLevel ;
    rdfs:label "OfficialLegalValue" ;
    rdfs:comment "All the documents published by an official publisher should have at least the legal value level \\"OfficialLegalValue\\". This indicates that the document was published by an organisation with the public task of making it available (e.g. a consolidated version of a EU directive published by the EU Office of Publications)." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#LegalValue-official> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:OfflineEventAttendanceMode a schema:EventAttendanceModeEnumeration ;
    rdfs:label "OfflineEventAttendanceMode" ;
    rdfs:comment "OfflineEventAttendanceMode - an event that is primarily conducted offline. " ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:OfflinePermanently a schema:GameServerStatus ;
    rdfs:label "OfflinePermanently" ;
    rdfs:comment "Game server status: OfflinePermanently. Server is offline and not available." .

schema:OfflineTemporarily a schema:GameServerStatus ;
    rdfs:label "OfflineTemporarily" ;
    rdfs:comment "Game server status: OfflineTemporarily. Server is offline now but it can be online soon." .

schema:OnSitePickup a schema:DeliveryMethod ;
    rdfs:label "OnSitePickup" ;
    rdfs:comment "A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office." .

schema:Oncologic a schema:MedicalSpecialty ;
    rdfs:label "Oncologic" ;
    rdfs:comment "A specific branch of medical science that deals with benign and malignant tumors, including the study of their development, diagnosis, treatment and prevention." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OneTimePayments a schema:GovernmentBenefitsType ;
    rdfs:label "OneTimePayments" ;
    rdfs:comment "OneTimePayments: this is a benefit for one-time payments for individuals." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:Online a schema:GameServerStatus ;
    rdfs:label "Online" ;
    rdfs:comment "Game server status: Online. Server is available." .

schema:OnlineEventAttendanceMode a schema:EventAttendanceModeEnumeration ;
    rdfs:label "OnlineEventAttendanceMode" ;
    rdfs:comment "OnlineEventAttendanceMode - an event that is primarily conducted online. " ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:OnlineFull a schema:GameServerStatus ;
    rdfs:label "OnlineFull" ;
    rdfs:comment "Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached." .

schema:OnlineOnly a schema:ItemAvailability ;
    rdfs:label "OnlineOnly" ;
    rdfs:comment "Indicates that the item is available only online." .

schema:OpenTrial a schema:MedicalTrialDesign ;
    rdfs:label "OpenTrial" ;
    rdfs:comment "A trial design in which the researcher knows the full details of the treatment, and so does the patient." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Optometric a schema:MedicalSpecialty ;
    rdfs:label "Optometric" ;
    rdfs:comment "The science or practice of testing visual acuity and prescribing corrective lenses." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OrderCancelled a schema:OrderStatus ;
    rdfs:label "OrderCancelled" ;
    rdfs:comment "OrderStatus representing cancellation of an order." .

schema:OrderDelivered a schema:OrderStatus ;
    rdfs:label "OrderDelivered" ;
    rdfs:comment "OrderStatus representing successful delivery of an order." .

schema:OrderInTransit a schema:OrderStatus ;
    rdfs:label "OrderInTransit" ;
    rdfs:comment "OrderStatus representing that an order is in transit." .

schema:OrderPaymentDue a schema:OrderStatus ;
    rdfs:label "OrderPaymentDue" ;
    rdfs:comment "OrderStatus representing that payment is due on an order." .

schema:OrderPickupAvailable a schema:OrderStatus ;
    rdfs:label "OrderPickupAvailable" ;
    rdfs:comment "OrderStatus representing availability of an order for pickup." .

schema:OrderProblem a schema:OrderStatus ;
    rdfs:label "OrderProblem" ;
    rdfs:comment "OrderStatus representing that there is a problem with the order." .

schema:OrderProcessing a schema:OrderStatus ;
    rdfs:label "OrderProcessing" ;
    rdfs:comment "OrderStatus representing that an order is being processed." .

schema:OrderReturned a schema:OrderStatus ;
    rdfs:label "OrderReturned" ;
    rdfs:comment "OrderStatus representing that an order has been returned." .

schema:OriginalMediaContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "OriginalMediaContent" ;
    rdfs:comment """Content coded 'as original media content' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'original': No evidence the footage has been misleadingly altered or manipulated, though it may contain false or misleading claims.

For an [[ImageObject]] to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.

For an [[ImageObject]] with embedded text to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.

For an [[AudioObject]] to be 'original': No evidence the audio has been misleadingly altered or manipulated, though it may contain false or misleading claims.
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:OriginalShippingFees a schema:ReturnFeesEnumeration ;
    rdfs:label "OriginalShippingFees" ;
    rdfs:comment "OriginalShippingFees ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Osteopathic a schema:MedicineSystem ;
    rdfs:label "Osteopathic" ;
    rdfs:comment "A system of medicine focused on promoting the body's innate ability to heal itself." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Otolaryngologic a schema:MedicalSpecialty ;
    rdfs:label "Otolaryngologic" ;
    rdfs:comment "A specific branch of medical science that is concerned with the ear, nose and throat and their respective disease states." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:OutOfStock a schema:ItemAvailability ;
    rdfs:label "OutOfStock" ;
    rdfs:comment "Indicates that the item is out of stock." .

schema:OverviewHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "OverviewHealthAspect" ;
    rdfs:comment "Overview of the content. Contains a summarized view of the topic with the most relevant information for an introduction." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:PET a schema:MedicalImagingTechnique ;
    rdfs:label "PET" ;
    rdfs:comment "Positron emission tomography imaging." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PaidLeave a schema:GovernmentBenefitsType ;
    rdfs:label "PaidLeave" ;
    rdfs:comment "PaidLeave: this is a benefit for paid leave." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:Paperback a schema:BookFormatType ;
    rdfs:label "Paperback" ;
    rdfs:comment "Book format: Paperback." .

schema:ParcelService a schema:DeliveryMethod ;
    rdfs:label "ParcelService" ;
    rdfs:comment """A private parcel service as the delivery mode available for a certain offer.\\\\n\\\\nCommonly used values:\\\\n\\\\n* http://purl.org/goodrelations/v1#DHL\\\\n* http://purl.org/goodrelations/v1#FederalExpress\\\\n* http://purl.org/goodrelations/v1#UPS
      """ ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:ParentalSupport a schema:GovernmentBenefitsType ;
    rdfs:label "ParentalSupport" ;
    rdfs:comment "ParentalSupport: this is a benefit for parental support." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:ParkingMap a schema:MapCategoryType ;
    rdfs:label "ParkingMap" ;
    rdfs:comment "A parking map." .

schema:PartiallyInForce a schema:LegalForceStatus ;
    rdfs:label "PartiallyInForce" ;
    rdfs:comment "Indicates that parts of the legislation are in force, and parts are not." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#InForce-partiallyInForce> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:Pathology a schema:MedicalSpecialty ;
    rdfs:label "Pathology" ;
    rdfs:comment "A specific branch of medical science that is concerned with the study of the cause, origin and nature of a disease state, including its consequences as a result of manifestation of the disease. In clinical care, the term is used to designate a branch of medicine using laboratory tests to diagnose and determine the prognostic significance of illness." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PatientExperienceHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "PatientExperienceHealthAspect" ;
    rdfs:comment "Content about the real life experience of patients or people that have lived a similar experience about the topic. May be forums, topics, Q-and-A and related material." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:PaymentAutomaticallyApplied a schema:PaymentStatusType ;
    rdfs:label "PaymentAutomaticallyApplied" ;
    rdfs:comment "An automatic payment system is in place and will be used." .

schema:PaymentComplete a schema:PaymentStatusType ;
    rdfs:label "PaymentComplete" ;
    rdfs:comment "The payment has been received and processed." .

schema:PaymentDeclined a schema:PaymentStatusType ;
    rdfs:label "PaymentDeclined" ;
    rdfs:comment "The payee received the payment, but it was declined for some reason." .

schema:PaymentDue a schema:PaymentStatusType ;
    rdfs:label "PaymentDue" ;
    rdfs:comment "The payment is due, but still within an acceptable time to be received." .

schema:PaymentPastDue a schema:PaymentStatusType ;
    rdfs:label "PaymentPastDue" ;
    rdfs:comment "The payment is due and considered late." .

schema:Pediatric a schema:MedicalSpecialty ;
    rdfs:label "Pediatric" ;
    rdfs:comment "A specific branch of medical science that specializes in the care of infants, children and adolescents." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PercutaneousProcedure a schema:MedicalProcedureType ;
    rdfs:label "PercutaneousProcedure" ;
    rdfs:comment "A type of medical procedure that involves percutaneous techniques, where access to organs or tissue is achieved via needle-puncture of the skin. For example, catheter-based procedures like stent delivery." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PharmacySpecialty a schema:MedicalSpecialty ;
    rdfs:label "PharmacySpecialty" ;
    rdfs:comment "The practice or art and science of preparing and dispensing drugs and medicines." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Physiotherapy a schema:MedicalSpecialty ;
    rdfs:label "Physiotherapy" ;
    rdfs:comment "The practice of treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery.." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PlaceboControlledTrial a schema:MedicalTrialDesign ;
    rdfs:label "PlaceboControlledTrial" ;
    rdfs:comment "A placebo-controlled trial design." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PlasticSurgery a schema:MedicalSpecialty ;
    rdfs:label "PlasticSurgery" ;
    rdfs:comment "A specific branch of medical science that pertains to therapeutic or cosmetic repair or re-formation of missing, injured or malformed tissues or body parts by manual and instrumental means." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Podiatric a schema:MedicalSpecialty ;
    rdfs:label "Podiatric" ;
    rdfs:comment "Podiatry is the care of the human foot, especially the diagnosis and treatment of foot disorders." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PotentialActionStatus a schema:ActionStatusType ;
    rdfs:label "PotentialActionStatus" ;
    rdfs:comment "A description of an action that is supported." .

schema:PreOrder a schema:ItemAvailability ;
    rdfs:label "PreOrder" ;
    rdfs:comment "Indicates that the item is available for pre-order." .

schema:PreSale a schema:ItemAvailability ;
    rdfs:label "PreSale" ;
    rdfs:comment "Indicates that the item is available for ordering and delivery before general availability." .

schema:PregnancyHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "PregnancyHealthAspect" ;
    rdfs:comment "Content discussing pregnancy-related aspects of a health topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:PrescriptionOnly a schema:DrugPrescriptionStatus ;
    rdfs:label "PrescriptionOnly" ;
    rdfs:comment "Available by prescription only." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PreventionHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "PreventionHealthAspect" ;
    rdfs:comment "Information about actions or measures that can be taken to avoid getting the topic or reaching a critical situation related to the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:PrimaryCare a schema:MedicalSpecialty ;
    rdfs:label "PrimaryCare" ;
    rdfs:comment "The medical care by a physician, or other health-care professional, who is the patient's first contact with the health-care system and who may recommend a specialist if necessary." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Prion a schema:InfectiousAgentClass ;
    rdfs:label "Prion" ;
    rdfs:comment "A prion is an infectious agent composed of protein in a misfolded form." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PrognosisHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "PrognosisHealthAspect" ;
    rdfs:comment "Typical progression and happenings of life course of the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:Protozoa a schema:InfectiousAgentClass ;
    rdfs:label "Protozoa" ;
    rdfs:comment "Single-celled organism that causes an infection." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Psychiatric a schema:MedicalSpecialty ;
    rdfs:label "Psychiatric" ;
    rdfs:comment "A specific branch of medical science that is concerned with the study, treatment, and prevention of mental illness, using both medical and psychological therapies." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PublicHealth a schema:MedicalSpecialty ;
    rdfs:label "PublicHealth" ;
    rdfs:comment "Branch of medicine that pertains to the health services to improve and protect community health, especially epidemiology, sanitation, immunization, and preventive medicine." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:PublicHolidays a schema:DayOfWeek ;
    rdfs:label "PublicHolidays" ;
    rdfs:comment "This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a \\"day of the week\\", it can be used with [[OpeningHoursSpecification]]. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass> .

schema:Pulmonary a schema:MedicalSpecialty ;
    rdfs:label "Pulmonary" ;
    rdfs:comment "A specific branch of medical science that pertains to the study of the respiratory system and its respective disease states." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Radiography a schema:MedicalImagingTechnique,
        schema:MedicalSpecialty ;
    rdfs:label "Radiography" ;
    rdfs:comment "Radiography is an imaging technique that uses electromagnetic radiation other than visible light, especially X-rays, to view the internal structure of a non-uniformly composed and opaque object such as the human body." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RandomizedTrial a schema:MedicalTrialDesign ;
    rdfs:label "RandomizedTrial" ;
    rdfs:comment "A randomized trial design." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ReadPermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "ReadPermission" ;
    rdfs:comment "Permission to read or view the document." .

schema:RearWheelDriveConfiguration a schema:DriveWheelConfigurationValue ;
    rdfs:label "RearWheelDriveConfiguration" ;
    rdfs:comment "Real-wheel drive is a transmission layout where the engine drives the rear wheels." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Recruiting a schema:MedicalStudyStatus ;
    rdfs:label "Recruiting" ;
    rdfs:comment "Recruiting participants." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RefurbishedCondition a schema:OfferItemCondition ;
    rdfs:label "RefurbishedCondition" ;
    rdfs:comment "Indicates that the item is refurbished." .

schema:Registry a schema:MedicalObservationalStudyDesign ;
    rdfs:label "Registry" ;
    rdfs:comment "A registry-based study design." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ReimbursementCap a schema:DrugCostCategory ;
    rdfs:label "ReimbursementCap" ;
    rdfs:comment "The drug's cost represents the maximum reimbursement paid by an insurer for the drug." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RelatedTopicsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "RelatedTopicsHealthAspect" ;
    rdfs:comment "Other prominent or relevant topics tied to the main topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:RemixAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "RemixAlbum" ;
    rdfs:comment "RemixAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Renal a schema:MedicalSpecialty ;
    rdfs:label "Renal" ;
    rdfs:comment "A specific branch of medical science that pertains to the study of the kidneys and its respective disease states." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RentalVehicleUsage a schema:CarUsageType ;
    rdfs:label "RentalVehicleUsage" ;
    rdfs:comment "Indicates the usage of the vehicle as a rental car." ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:ReservationCancelled a schema:ReservationStatusType ;
    rdfs:label "ReservationCancelled" ;
    rdfs:comment "The status for a previously confirmed reservation that is now cancelled." .

schema:ReservationConfirmed a schema:ReservationStatusType ;
    rdfs:label "ReservationConfirmed" ;
    rdfs:comment "The status of a confirmed reservation." .

schema:ReservationHold a schema:ReservationStatusType ;
    rdfs:label "ReservationHold" ;
    rdfs:comment "The status of a reservation on hold pending an update like credit card number or flight changes." .

schema:ReservationPending a schema:ReservationStatusType ;
    rdfs:label "ReservationPending" ;
    rdfs:comment "The status of a reservation when a request has been sent, but not confirmed." .

schema:RespiratoryTherapy a schema:MedicalSpecialty ;
    rdfs:label "RespiratoryTherapy" ;
    rdfs:comment "The therapy that is concerned with the maintenance or improvement of respiratory function (as in patients with pulmonary disease)." ;
    rdfs:subClassOf schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RestockingFees a schema:ReturnFeesEnumeration ;
    rdfs:label "RestockingFees" ;
    rdfs:comment "RestockingFees ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:ResultsAvailable a schema:MedicalStudyStatus ;
    rdfs:label "ResultsAvailable" ;
    rdfs:comment "Results are available." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ResultsNotAvailable a schema:MedicalStudyStatus ;
    rdfs:label "ResultsNotAvailable" ;
    rdfs:comment "Results are not available." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Retail a schema:DrugCostCategory ;
    rdfs:label "Retail" ;
    rdfs:comment "The drug's cost represents the retail cost of the drug." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ReturnShippingFees a schema:ReturnFeesEnumeration ;
    rdfs:label "ReturnShippingFees" ;
    rdfs:comment "ReturnShippingFees ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:Rheumatologic a schema:MedicalSpecialty ;
    rdfs:label "Rheumatologic" ;
    rdfs:comment "A specific branch of medical science that deals with the study and treatment of rheumatic, autoimmune or joint diseases." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:RightHandDriving a schema:SteeringPositionValue ;
    rdfs:label "RightHandDriving" ;
    rdfs:comment "The steering position is on the right side of the vehicle (viewed from the main direction of driving)." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:RisksOrComplicationsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "RisksOrComplicationsHealthAspect" ;
    rdfs:comment "Information about the risk factors and possible complications that may follow a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:RsvpResponseMaybe a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseMaybe" ;
    rdfs:comment "The invitee may or may not attend." .

schema:RsvpResponseNo a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseNo" ;
    rdfs:comment "The invitee will not attend." .

schema:RsvpResponseYes a schema:RsvpResponseType ;
    rdfs:label "RsvpResponseYes" ;
    rdfs:comment "The invitee will attend." .

schema:SRP a schema:PriceTypeEnumeration ;
    rdfs:label "SRP" ;
    rdfs:comment "Represents the suggested retail price (\\"SRP\\") of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:SafetyHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "SafetyHealthAspect" ;
    rdfs:comment "Content about the safety-related aspects of a health topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2799> .

schema:SalePrice a schema:PriceTypeEnumeration ;
    rdfs:label "SalePrice" ;
    rdfs:comment "Represents a sale price (usually active for a limited period) of an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2712> .

schema:SatireOrParodyContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "SatireOrParodyContent" ;
    rdfs:comment """Content coded 'satire or content' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'satire or parody content': A video that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the â€œmissing contextâ€ rating.)

For an [[ImageObject]] to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the â€œmissing contextâ€ rating.)

For an [[ImageObject]] with embedded text to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the â€œmissing contextâ€ rating.)

For an [[AudioObject]] to be 'satire or parody content': Audio that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the â€œmissing contextâ€ rating.)
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:Saturday a schema:DayOfWeek ;
    rdfs:label "Saturday" ;
    rdfs:comment "The day of the week between Friday and Sunday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q131> .

schema:ScreeningHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "ScreeningHealthAspect" ;
    rdfs:comment "Content about how to screen or further filter a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:SeatingMap a schema:MapCategoryType ;
    rdfs:label "SeatingMap" ;
    rdfs:comment "A seating map." .

schema:SeeDoctorHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "SeeDoctorHealthAspect" ;
    rdfs:comment "Information about questions that may be asked, when to see a professional, measures before seeing a doctor or content about the first consultation." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:SelfCareHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "SelfCareHealthAspect" ;
    rdfs:comment "Self care actions or measures that can be taken to sooth, health or avoid a topic. This may be carried at home and can be carried/managed by the person itself." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:SideEffectsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "SideEffectsHealthAspect" ;
    rdfs:comment "Side effects that can be observed from the usage of the topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:SingleBlindedTrial a schema:MedicalTrialDesign ;
    rdfs:label "SingleBlindedTrial" ;
    rdfs:comment "A trial design in which the researcher knows which treatment the patient was randomly assigned to but the patient does not." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SingleCenterTrial a schema:MedicalTrialDesign ;
    rdfs:label "SingleCenterTrial" ;
    rdfs:comment "A trial that takes place at a single center." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SinglePlayer a schema:GamePlayMode ;
    rdfs:label "SinglePlayer" ;
    rdfs:comment "Play mode: SinglePlayer. Which is played by a lone player." .

schema:SingleRelease a schema:MusicAlbumReleaseType ;
    rdfs:label "SingleRelease" ;
    rdfs:comment "SingleRelease." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:SizeSystemImperial a schema:SizeSystemEnumeration ;
    rdfs:label "SizeSystemImperial" ;
    rdfs:comment "Imperial size system." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:SizeSystemMetric a schema:SizeSystemEnumeration ;
    rdfs:label "SizeSystemMetric" ;
    rdfs:comment "Metric size system." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:Skin a schema:PhysicalExam ;
    rdfs:label "Skin" ;
    rdfs:comment "Skin assessment with clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SoldOut a schema:ItemAvailability ;
    rdfs:label "SoldOut" ;
    rdfs:comment "Indicates that the item has sold out." .

schema:SoundtrackAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "SoundtrackAlbum" ;
    rdfs:comment "SoundtrackAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:SpeechPathology a schema:MedicalSpecialty ;
    rdfs:label "SpeechPathology" ;
    rdfs:comment "The scientific study and treatment of defects, disorders, and malfunctions of speech and voice, as stuttering, lisping, or lalling, and of language disturbances, as aphasia or delayed language acquisition." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SpokenWordAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "SpokenWordAlbum" ;
    rdfs:comment "SpokenWordAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:StagedContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "StagedContent" ;
    rdfs:comment """Content coded 'staged content' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'staged content': A video that has been created using actors or similarly contrived.

For an [[ImageObject]] to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.

For an [[ImageObject]] with embedded text to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.

For an [[AudioObject]] to be 'staged content': Audio that has been created using actors or similarly contrived.
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:StagesHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "StagesHealthAspect" ;
    rdfs:comment "Stages that can be observed from a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:StoreCreditRefund a schema:RefundTypeEnumeration ;
    rdfs:label "StoreCreditRefund" ;
    rdfs:comment "A StoreCreditRefund ..." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:StrengthTraining a schema:PhysicalActivityCategory ;
    rdfs:label "StrengthTraining" ;
    rdfs:comment "Physical activity that is engaged in to improve muscle and bone strength. Also referred to as resistance training." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:StudioAlbum a schema:MusicAlbumProductionType ;
    rdfs:label "StudioAlbum" ;
    rdfs:comment "StudioAlbum." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Subscription a schema:PriceComponentTypeEnumeration ;
    rdfs:label "Subscription" ;
    rdfs:comment "Represents the subscription pricing component of the total price for an offered product." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:Sunday a schema:DayOfWeek ;
    rdfs:label "Sunday" ;
    rdfs:comment "The day of the week between Saturday and Monday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q132> .

schema:Surgical a schema:MedicalSpecialty ;
    rdfs:label "Surgical" ;
    rdfs:comment "A specific branch of medical science that pertains to treating diseases, injuries and deformities by manual and instrumental means." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Suspended a schema:MedicalStudyStatus ;
    rdfs:label "Suspended" ;
    rdfs:comment "Suspended." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:SymptomsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "SymptomsHealthAspect" ;
    rdfs:comment "Symptoms or related symptoms of a Topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:TaxiVehicleUsage a schema:CarUsageType ;
    rdfs:label "TaxiVehicleUsage" ;
    rdfs:comment "Indicates the usage of the car as a taxi." ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:Terminated a schema:MedicalStudyStatus ;
    rdfs:label "Terminated" ;
    rdfs:comment "Terminated." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Therapeutic a schema:MedicalDevicePurpose ;
    rdfs:label "Therapeutic" ;
    rdfs:comment "A medical device used for therapeutic purposes." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Throat a schema:PhysicalExam ;
    rdfs:label "Throat" ;
    rdfs:comment "Throat assessment with  clinical examination." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Thursday a schema:DayOfWeek ;
    rdfs:label "Thursday" ;
    rdfs:comment "The day of the week between Wednesday and Friday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q129> .

schema:TollFree a schema:ContactPointOption ;
    rdfs:label "TollFree" ;
    rdfs:comment "The associated telephone number is toll free." .

schema:Toxicologic a schema:MedicalSpecialty ;
    rdfs:label "Toxicologic" ;
    rdfs:comment "A specific branch of medical science that is concerned with poisons, their nature, effects and detection and involved in the treatment of poisoning." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:TraditionalChinese a schema:MedicineSystem ;
    rdfs:label "TraditionalChinese" ;
    rdfs:comment "A system of medicine based on common theoretical concepts that originated in China and evolved over thousands of years, that uses herbs, acupuncture, exercise, massage, dietary therapy, and other methods to treat a wide range of conditions." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:TransformedContent a schema:MediaManipulationRatingEnumeration ;
    rdfs:label "TransformedContent" ;
    rdfs:comment """Content coded 'transformed content' in a [[MediaReview]], considered in the context of how it was published or shared.

For a [[VideoObject]] to be 'transformed content':  or all of the video has been manipulated to transform the footage itself. This category includes using tools like the Adobe Suite to change the speed of the video, add or remove visual elements or dub audio. Deepfakes are also a subset of transformation.

For an [[ImageObject]] to be transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.

For an [[ImageObject]] with embedded text to be 'transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.

For an [[AudioObject]] to be 'transformed content': Part or all of the audio has been manipulated to alter the words or sounds, or the audio has been synthetically generated, such as to create a sound-alike voice.
""" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:TransitMap a schema:MapCategoryType ;
    rdfs:label "TransitMap" ;
    rdfs:comment "A transit map." .

schema:TreatmentsHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "TreatmentsHealthAspect" ;
    rdfs:comment "Treatments or related therapies for a Topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:TripleBlindedTrial a schema:MedicalTrialDesign ;
    rdfs:label "TripleBlindedTrial" ;
    rdfs:comment "A trial design in which neither the researcher, the person administering the therapy nor the patient knows the details of the treatment the patient was randomly assigned to." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:True a schema:Boolean ;
    rdfs:label "True" ;
    rdfs:comment "The boolean value true." .

schema:Tuesday a schema:DayOfWeek ;
    rdfs:label "Tuesday" ;
    rdfs:comment "The day of the week between Monday and Wednesday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q127> .

schema:TypesHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "TypesHealthAspect" ;
    rdfs:comment "Categorization and other types related to a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:UKTrust a schema:UKNonprofitType ;
    rdfs:label "UKTrust" ;
    rdfs:comment "UKTrust: Non-profit type referring to a UK trust." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:Ultrasound a schema:MedicalImagingTechnique ;
    rdfs:label "Ultrasound" ;
    rdfs:comment "Ultrasound imaging." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:UnemploymentSupport a schema:GovernmentBenefitsType ;
    rdfs:label "UnemploymentSupport" ;
    rdfs:comment "UnemploymentSupport: this is a benefit for unemployment support." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:UnincorporatedAssociationCharity a schema:UKNonprofitType ;
    rdfs:label "UnincorporatedAssociationCharity" ;
    rdfs:comment "UnincorporatedAssociationCharity: Non-profit type referring to a charitable company that is not incorporated (UK)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:UnofficialLegalValue a schema:LegalValueLevel ;
    rdfs:label "UnofficialLegalValue" ;
    rdfs:comment "Indicates that a document has no particular or special standing (e.g. a republication of a law by a private publisher)." ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#LegalValue-unofficial> ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:Urologic a schema:MedicalSpecialty ;
    rdfs:label "Urologic" ;
    rdfs:comment "A specific branch of medical science that is concerned with the diagnosis and treatment of diseases pertaining to the urinary tract and the urogenital system." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:UsageOrScheduleHealthAspect a schema:HealthAspectEnumeration ;
    rdfs:label "UsageOrScheduleHealthAspect" ;
    rdfs:comment "Content about how, when, frequency and dosage of a topic." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2374> .

schema:UsedCondition a schema:OfferItemCondition ;
    rdfs:label "UsedCondition" ;
    rdfs:comment "Indicates that the item is used." .

schema:VeganDiet a schema:RestrictedDiet ;
    rdfs:label "VeganDiet" ;
    rdfs:comment "A diet exclusive of all animal products." .

schema:VegetarianDiet a schema:RestrictedDiet ;
    rdfs:label "VegetarianDiet" ;
    rdfs:comment "A diet exclusive of animal meat." .

schema:VenueMap a schema:MapCategoryType ;
    rdfs:label "VenueMap" ;
    rdfs:comment "A venue map (e.g. for malls, auditoriums, museums, etc.)." .

schema:VinylFormat a schema:MusicReleaseFormatType ;
    rdfs:label "VinylFormat" ;
    rdfs:comment "VinylFormat." ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:Virus a schema:InfectiousAgentClass ;
    rdfs:label "Virus" ;
    rdfs:comment "Pathogenic virus that causes viral infection." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:WearableMeasurementBack a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementBack" ;
    rdfs:comment "Measurement of the back section, for example of a jacket" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementChestOrBust a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementChestOrBust" ;
    rdfs:comment "Measurement of the chest/bust section, for example of a suit" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementCollar a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementCollar" ;
    rdfs:comment "Measurement of the collar, for example of a shirt" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementCup a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementCup" ;
    rdfs:comment "Measurement of the cup, for example of a bra" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementHeight a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementHeight" ;
    rdfs:comment "Measurement of the height, for example the heel height of a shoe" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementHips a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementHips" ;
    rdfs:comment "Measurement of the hip section, for example of a skirt" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementInseam a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementInseam" ;
    rdfs:comment "Measurement of the inseam, for example of pants" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementLength a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementLength" ;
    rdfs:comment "Represents the length, for example of a dress" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementOutsideLeg a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementOutsideLeg" ;
    rdfs:comment "Measurement of the outside leg, for example of pants" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementSleeve a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementSleeve" ;
    rdfs:comment "Measurement of the sleeve length, for example of a shirt" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementWaist a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementWaist" ;
    rdfs:comment "Measurement of the waist section, for example of pants" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableMeasurementWidth a schema:WearableMeasurementTypeEnumeration ;
    rdfs:label "WearableMeasurementWidth" ;
    rdfs:comment "Measurement of the width, for example of shoes" ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupBig a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupBig" ;
    rdfs:comment "Size group \\"Big\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupBoys a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupBoys" ;
    rdfs:comment "Size group \\"Boys\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupExtraShort a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupExtraShort" ;
    rdfs:comment "Size group \\"Extra Short\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupExtraTall a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupExtraTall" ;
    rdfs:comment "Size group \\"Extra Tall\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupGirls a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupGirls" ;
    rdfs:comment "Size group \\"Girls\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupHusky a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupHusky" ;
    rdfs:comment "Size group \\"Husky\\" (or \\"Stocky\\") for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupInfants a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupInfants" ;
    rdfs:comment "Size group \\"Infants\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupJuniors a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupJuniors" ;
    rdfs:comment "Size group \\"Juniors\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupMaternity a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupMaternity" ;
    rdfs:comment "Size group \\"Maternity\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupMens a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupMens" ;
    rdfs:comment "Size group \\"Mens\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupMisses a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupMisses" ;
    rdfs:comment "Size group \\"Misses\\" (also known as \\"Missy\\") for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupPetite a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupPetite" ;
    rdfs:comment "Size group \\"Petite\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupPlus a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupPlus" ;
    rdfs:comment "Size group \\"Plus\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupRegular a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupRegular" ;
    rdfs:comment "Size group \\"Regular\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupShort a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupShort" ;
    rdfs:comment "Size group \\"Short\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupTall a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupTall" ;
    rdfs:comment "Size group \\"Tall\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeGroupWomens a schema:WearableSizeGroupEnumeration ;
    rdfs:label "WearableSizeGroupWomens" ;
    rdfs:comment "Size group \\"Womens\\" for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemAU a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemAU" ;
    rdfs:comment "Australian size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemBR a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemBR" ;
    rdfs:comment "Brazilian size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemCN a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemCN" ;
    rdfs:comment "Chinese size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemContinental a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemContinental" ;
    rdfs:comment "Continental size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemDE a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemDE" ;
    rdfs:comment "German size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemEN13402 a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemEN13402" ;
    rdfs:comment "EN 13402 (joint European standard for size labelling of clothes)." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemEurope a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemEurope" ;
    rdfs:comment "European size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemFR a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemFR" ;
    rdfs:comment "French size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemGS1 a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemGS1" ;
    rdfs:comment "GS1 (formerly NRF) size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemIT a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemIT" ;
    rdfs:comment "Italian size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemJP a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemJP" ;
    rdfs:comment "Japanese size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemMX a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemMX" ;
    rdfs:comment "Mexican size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemUK a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemUK" ;
    rdfs:comment "United Kingdom size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:WearableSizeSystemUS a schema:WearableSizeSystemEnumeration ;
    rdfs:label "WearableSizeSystemUS" ;
    rdfs:comment "United States size system for wearables." ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:Wednesday a schema:DayOfWeek ;
    rdfs:label "Wednesday" ;
    rdfs:comment "The day of the week between Tuesday and Thursday." ;
    schema:sameAs <http://www.wikidata.org/entity/Q128> .

schema:WesternConventional a schema:MedicineSystem ;
    rdfs:label "WesternConventional" ;
    rdfs:comment "The conventional Western system of medicine, that aims to apply the best available evidence gained from the scientific method to clinical decision making. Also known as conventional or Western medicine." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Wholesale a schema:DrugCostCategory ;
    rdfs:label "Wholesale" ;
    rdfs:comment "The drug's cost represents the wholesale acquisition cost of the drug." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:Withdrawn a schema:MedicalStudyStatus ;
    rdfs:label "Withdrawn" ;
    rdfs:comment "Withdrawn." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:WritePermission a schema:DigitalDocumentPermissionType ;
    rdfs:label "WritePermission" ;
    rdfs:comment "Permission to write or edit the document." .

schema:XRay a schema:MedicalImagingTechnique ;
    rdfs:label "XRay" ;
    rdfs:comment "X-ray imaging." ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:ZoneBoardingPolicy a schema:BoardingPolicyType ;
    rdfs:label "ZoneBoardingPolicy" ;
    rdfs:comment "The airline boards by zones of the plane." .

schema:abridged a rdf:Property ;
    rdfs:label "abridged" ;
    rdfs:comment "Indicates whether the book is an abridged edition." ;
    schema:domainIncludes schema:Book ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Boolean .

schema:abstract a rdf:Property ;
    rdfs:label "abstract" ;
    rdfs:comment "An abstract is a short description that summarizes a [[CreativeWork]]." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/276> .

schema:accelerationTime a rdf:Property ;
    rdfs:label "accelerationTime" ;
    rdfs:comment "The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\\\\n\\\\nTypical unit code(s): SEC for seconds\\\\n\\\\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use \\"SEC\\" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:acceptedAnswer a rdf:Property ;
    rdfs:label "acceptedAnswer" ;
    rdfs:comment "The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author." ;
    rdfs:subPropertyOf schema:suggestedAnswer ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Answer,
        schema:ItemList .

schema:acceptedOffer a rdf:Property ;
    rdfs:label "acceptedOffer" ;
    rdfs:comment "The offer(s) -- e.g., product, quantity and price combinations -- included in the order." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Offer .

schema:acceptedPaymentMethod a rdf:Property ;
    rdfs:label "acceptedPaymentMethod" ;
    rdfs:comment "The payment method(s) accepted by seller for this offer." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:LoanOrCredit,
        schema:PaymentMethod ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:acceptsReservations a rdf:Property ;
    rdfs:label "acceptsReservations" ;
    rdfs:comment "Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings \`\`\`Yes\`\`\` or \`\`\`No\`\`\`." ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Boolean,
        schema:Text,
        schema:URL .

schema:accessCode a rdf:Property ;
    rdfs:label "accessCode" ;
    rdfs:comment "Password, PIN, or access code needed for delivery (e.g. from a locker)." ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:Text .

schema:accessMode a rdf:Property ;
    rdfs:label "accessMode" ;
    rdfs:comment """The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
      """ ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1100> .

schema:accessModeSufficient a rdf:Property ;
    rdfs:label "accessModeSufficient" ;
    rdfs:comment """A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.
      """ ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:ItemList ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1100> .

schema:accessibilityAPI a rdf:Property ;
    rdfs:label "accessibilityAPI" ;
    rdfs:comment "Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility))." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:accessibilityControl a rdf:Property ;
    rdfs:label "accessibilityControl" ;
    rdfs:comment "Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility))." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:accessibilityFeature a rdf:Property ;
    rdfs:label "accessibilityFeature" ;
    rdfs:comment "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility))." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:accessibilityHazard a rdf:Property ;
    rdfs:label "accessibilityHazard" ;
    rdfs:comment "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility))." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:accessibilitySummary a rdf:Property ;
    rdfs:label "accessibilitySummary" ;
    rdfs:comment "A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \\"short descriptions are present but long descriptions will be needed for non-visual users\\" or \\"short descriptions are present and no long descriptions are needed.\\"" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1100> .

schema:accommodationCategory a rdf:Property ;
    rdfs:label "accommodationCategory" ;
    rdfs:comment "Category of an [[Accommodation]], following real estate conventions e.g. RESO (see [PropertySubType](https://ddwiki.reso.org/display/DDW17/PropertySubType+Field), and [PropertyType](https://ddwiki.reso.org/display/DDW17/PropertyType+Field) fields  for suggested values)." ;
    rdfs:subPropertyOf schema:category ;
    schema:domainIncludes schema:Accommodation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:accommodationFloorPlan a rdf:Property ;
    rdfs:label "accommodationFloorPlan" ;
    rdfs:comment "A floorplan of some [[Accommodation]]." ;
    schema:domainIncludes schema:Accommodation,
        schema:Residence ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:FloorPlan ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:accountId a rdf:Property ;
    rdfs:label "accountId" ;
    rdfs:comment "The identifier for the account the payment will be applied to." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Text .

schema:accountMinimumInflow a rdf:Property ;
    rdfs:label "accountMinimumInflow" ;
    rdfs:comment "A minimum amount that has to be paid in every month." ;
    schema:domainIncludes schema:BankAccount ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:accountOverdraftLimit a rdf:Property ;
    rdfs:label "accountOverdraftLimit" ;
    rdfs:comment "An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money." ;
    schema:domainIncludes schema:BankAccount ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:accountablePerson a rdf:Property ;
    rdfs:label "accountablePerson" ;
    rdfs:comment "Specifies the Person that is legally accountable for the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person .

schema:acquireLicensePage a rdf:Property ;
    rdfs:label "acquireLicensePage" ;
    rdfs:comment "Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item." ;
    rdfs:subPropertyOf schema:usageInfo ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2454> .

schema:acquiredFrom a rdf:Property ;
    rdfs:label "acquiredFrom" ;
    rdfs:comment "The organization or person from which the product was acquired." ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:acrissCode a rdf:Property ;
    rdfs:label "acrissCode" ;
    rdfs:comment "The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards." ;
    schema:domainIncludes schema:BusOrCoach,
        schema:Car ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:actionAccessibilityRequirement a rdf:Property ;
    rdfs:label "actionAccessibilityRequirement" ;
    rdfs:comment "A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed." ;
    schema:domainIncludes schema:ConsumeAction ;
    schema:rangeIncludes schema:ActionAccessSpecification ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:actionPlatform a rdf:Property ;
    rdfs:label "actionPlatform" ;
    rdfs:comment "The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:actionStatus a rdf:Property ;
    rdfs:label "actionStatus" ;
    rdfs:comment "Indicates the current disposition of the Action." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:ActionStatusType .

schema:actionableFeedbackPolicy a rdf:Property ;
    rdfs:label "actionableFeedbackPolicy" ;
    rdfs:comment "For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroomâ€™s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:activeIngredient a rdf:Property ;
    rdfs:label "activeIngredient" ;
    rdfs:comment "An active ingredient, typically chemical compounds and/or biologic substances." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug,
        schema:DrugStrength,
        schema:Substance ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:activityDuration a rdf:Property ;
    rdfs:label "activityDuration" ;
    rdfs:comment "Length of time to engage in the activity." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Duration,
        schema:QuantitativeValue .

schema:activityFrequency a rdf:Property ;
    rdfs:label "activityFrequency" ;
    rdfs:comment "How often one should engage in the activity." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text .

schema:actors a rdf:Property ;
    rdfs:label "actors" ;
    rdfs:comment "An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip." ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:actor .

schema:addOn a rdf:Property ;
    rdfs:label "addOn" ;
    rdfs:comment "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge)." ;
    schema:domainIncludes schema:Offer ;
    schema:rangeIncludes schema:Offer ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:additionalName a rdf:Property ;
    rdfs:label "additionalName" ;
    rdfs:comment "An additional name for a Person, can be used for a middle name." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text .

schema:additionalNumberOfGuests a rdf:Property ;
    rdfs:label "additionalNumberOfGuests" ;
    rdfs:comment "If responding yes, the number of guests who will attend in addition to the invitee." ;
    schema:domainIncludes schema:RsvpAction ;
    schema:rangeIncludes schema:Number .

schema:additionalProperty a rdf:Property ;
    rdfs:label "additionalProperty" ;
    rdfs:comment """A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\\\\n\\\\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
""" ;
    schema:domainIncludes schema:Place,
        schema:Product,
        schema:QualitativeValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:PropertyValue .

schema:additionalType a rdf:Property ;
    rdfs:label "additionalType" ;
    rdfs:comment "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally." ;
    rdfs:subPropertyOf rdf:type ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL .

schema:additionalVariable a rdf:Property ;
    rdfs:label "additionalVariable" ;
    rdfs:comment "Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:address a rdf:Property ;
    rdfs:label "address" ;
    rdfs:comment "Physical address of the item." ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:PostalAddress,
        schema:Text .

schema:addressCountry a rdf:Property ;
    rdfs:label "addressCountry" ;
    rdfs:comment "The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1)." ;
    schema:domainIncludes schema:DefinedRegion,
        schema:GeoCoordinates,
        schema:GeoShape,
        schema:PostalAddress ;
    schema:rangeIncludes schema:Country,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:addressLocality a rdf:Property ;
    rdfs:label "addressLocality" ;
    rdfs:comment "The locality in which the street address is, and which is in the region. For example, Mountain View." ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text .

schema:addressRegion a rdf:Property ;
    rdfs:label "addressRegion" ;
    rdfs:comment "The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country) " ;
    schema:domainIncludes schema:DefinedRegion,
        schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:administrationRoute a rdf:Property ;
    rdfs:label "administrationRoute" ;
    rdfs:comment "A route by which this drug may be administered, e.g. 'oral'." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:advanceBookingRequirement a rdf:Property ;
    rdfs:label "advanceBookingRequirement" ;
    rdfs:comment "The amount of time that is required between accepting the offer and the actual usage of the resource or service." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:adverseOutcome a rdf:Property ;
    rdfs:label "adverseOutcome" ;
    rdfs:comment "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead." ;
    schema:domainIncludes schema:MedicalDevice,
        schema:TherapeuticProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:affectedBy a rdf:Property ;
    rdfs:label "affectedBy" ;
    rdfs:comment "Drugs that affect the test's results." ;
    schema:domainIncludes schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Drug .

schema:affiliation a rdf:Property ;
    rdfs:label "affiliation" ;
    rdfs:comment "An organization that this person is affiliated with. For example, a school/university, a club, or a team." ;
    rdfs:subPropertyOf schema:memberOf ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Organization .

schema:afterMedia a rdf:Property ;
    rdfs:label "afterMedia" ;
    rdfs:comment "A media object representing the circumstances after performing this direction." ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL .

schema:agent a rdf:Property ;
    rdfs:label "agent" ;
    rdfs:comment "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:aggregateRating a rdf:Property ;
    rdfs:label "aggregateRating" ;
    rdfs:comment "The overall rating, based on a collection of reviews or ratings, of the item." ;
    schema:domainIncludes schema:Brand,
        schema:CreativeWork,
        schema:Event,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:AggregateRating .

schema:aircraft a rdf:Property ;
    rdfs:label "aircraft" ;
    rdfs:comment "The kind of aircraft (e.g., \\"Boeing 747\\")." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text,
        schema:Vehicle .

schema:albumProductionType a rdf:Property ;
    rdfs:label "albumProductionType" ;
    rdfs:comment "Classification of the album by it's type of content: soundtrack, live album, studio album, etc." ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:rangeIncludes schema:MusicAlbumProductionType ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:albumReleaseType a rdf:Property ;
    rdfs:label "albumReleaseType" ;
    rdfs:comment "The kind of release which this album is: single, EP or album." ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:rangeIncludes schema:MusicAlbumReleaseType ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:albums a rdf:Property ;
    rdfs:label "albums" ;
    rdfs:comment "A collection of music albums." ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:MusicAlbum ;
    schema:supersededBy schema:album .

schema:alcoholWarning a rdf:Property ;
    rdfs:label "alcoholWarning" ;
    rdfs:comment "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:algorithm a rdf:Property ;
    rdfs:label "algorithm" ;
    rdfs:comment "The algorithm or rules to follow to compute the score." ;
    schema:domainIncludes schema:MedicalRiskScore ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:alignmentType a rdf:Property ;
    rdfs:label "alignmentType" ;
    rdfs:comment "A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'." ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text .

schema:alternateName a rdf:Property ;
    rdfs:label "alternateName" ;
    rdfs:comment "An alias for the item." ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text .

schema:alternativeHeadline a rdf:Property ;
    rdfs:label "alternativeHeadline" ;
    rdfs:comment "A secondary title of the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:amenityFeature a rdf:Property ;
    rdfs:label "amenityFeature" ;
    rdfs:comment "An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs." ;
    schema:domainIncludes schema:Accommodation,
        schema:FloorPlan,
        schema:LodgingBusiness,
        schema:Place ;
    schema:rangeIncludes schema:LocationFeatureSpecification ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:amount a rdf:Property ;
    rdfs:label "amount" ;
    rdfs:comment "The amount of money." ;
    schema:domainIncludes schema:DatedMoneySpecification,
        schema:InvestmentOrDeposit,
        schema:LoanOrCredit,
        schema:MonetaryGrant,
        schema:MoneyTransfer ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1253>,
        <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:amountOfThisGood a rdf:Property ;
    rdfs:label "amountOfThisGood" ;
    rdfs:comment "The quantity of the goods included in the offer." ;
    schema:domainIncludes schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:announcementLocation a rdf:Property ;
    rdfs:label "announcementLocation" ;
    rdfs:comment "Indicates a specific [[CivicStructure]] or [[LocalBusiness]] associated with the SpecialAnnouncement. For example, a specific testing facility or business with special opening hours. For a larger geographic region like a quarantine of an entire region, use [[spatialCoverage]]." ;
    rdfs:subPropertyOf schema:spatialCoverage ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CivicStructure,
        schema:LocalBusiness ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2514> .

schema:annualPercentageRate a rdf:Property ;
    rdfs:label "annualPercentageRate" ;
    rdfs:comment "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction." ;
    schema:domainIncludes schema:FinancialProduct ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:answerCount a rdf:Property ;
    rdfs:label "answerCount" ;
    rdfs:comment "The number of answers this question has received." ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Integer .

schema:answerExplanation a rdf:Property ;
    rdfs:label "answerExplanation" ;
    rdfs:comment "A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. " ;
    schema:domainIncludes schema:Answer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Comment,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2636> .

schema:antagonist a rdf:Property ;
    rdfs:label "antagonist" ;
    rdfs:comment "The muscle whose action counteracts the specified muscle." ;
    schema:domainIncludes schema:Muscle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Muscle .

schema:appearance a rdf:Property ;
    rdfs:label "appearance" ;
    rdfs:comment "Indicates an occurence of a [[Claim]] in some [[CreativeWork]]." ;
    rdfs:subPropertyOf schema:workExample ;
    schema:domainIncludes schema:Claim ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1828> .

schema:applicableLocation a rdf:Property ;
    rdfs:label "applicableLocation" ;
    rdfs:comment "The location in which the status applies." ;
    schema:domainIncludes schema:DrugCost,
        schema:DrugLegalStatus ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea .

schema:applicantLocationRequirements a rdf:Property ;
    rdfs:label "applicantLocationRequirements" ;
    rdfs:comment "The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2083> .

schema:application a rdf:Property ;
    rdfs:label "application" ;
    rdfs:comment "An application that can complete the request." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:SoftwareApplication ;
    schema:supersededBy schema:actionApplication .

schema:applicationCategory a rdf:Property ;
    rdfs:label "applicationCategory" ;
    rdfs:comment "Type of software application, e.g. 'Game, Multimedia'." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:applicationContact a rdf:Property ;
    rdfs:label "applicationContact" ;
    rdfs:comment "Contact details for further information relevant to this job posting." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ContactPoint ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2396> .

schema:applicationDeadline a rdf:Property ;
    rdfs:label "applicationDeadline" ;
    rdfs:comment "The date at which the program stops collecting applications for the next enrollment cycle." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:applicationStartDate a rdf:Property ;
    rdfs:label "applicationStartDate" ;
    rdfs:comment "The date at which the program begins collecting applications for the next enrollment cycle." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:applicationSubCategory a rdf:Property ;
    rdfs:label "applicationSubCategory" ;
    rdfs:comment "Subcategory of the application, e.g. 'Arcade Game'." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:applicationSuite a rdf:Property ;
    rdfs:label "applicationSuite" ;
    rdfs:comment "The name of the application suite to which the application belongs (e.g. Excel belongs to Office)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:appliesToDeliveryMethod a rdf:Property ;
    rdfs:label "appliesToDeliveryMethod" ;
    rdfs:comment "The delivery method(s) to which the delivery charge or payment charge specification applies." ;
    schema:domainIncludes schema:DeliveryChargeSpecification,
        schema:PaymentChargeSpecification ;
    schema:rangeIncludes schema:DeliveryMethod ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:appliesToPaymentMethod a rdf:Property ;
    rdfs:label "appliesToPaymentMethod" ;
    rdfs:comment "The payment method(s) to which the payment charge specification applies." ;
    schema:domainIncludes schema:PaymentChargeSpecification ;
    schema:rangeIncludes schema:PaymentMethod ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:area a rdf:Property ;
    rdfs:label "area" ;
    rdfs:comment "The area within which users can expect to reach the broadcast service." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:serviceArea .

schema:arrivalAirport a rdf:Property ;
    rdfs:label "arrivalAirport" ;
    rdfs:comment "The airport where the flight terminates." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Airport .

schema:arrivalBoatTerminal a rdf:Property ;
    rdfs:label "arrivalBoatTerminal" ;
    rdfs:comment "The terminal or port from which the boat arrives." ;
    schema:domainIncludes schema:BoatTrip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:BoatTerminal ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1755> .

schema:arrivalBusStop a rdf:Property ;
    rdfs:label "arrivalBusStop" ;
    rdfs:comment "The stop or station from which the bus arrives." ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:BusStation,
        schema:BusStop .

schema:arrivalGate a rdf:Property ;
    rdfs:label "arrivalGate" ;
    rdfs:comment "Identifier of the flight's arrival gate." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:arrivalPlatform a rdf:Property ;
    rdfs:label "arrivalPlatform" ;
    rdfs:comment "The platform where the train arrives." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text .

schema:arrivalStation a rdf:Property ;
    rdfs:label "arrivalStation" ;
    rdfs:comment "The station where the train trip ends." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:TrainStation .

schema:arrivalTerminal a rdf:Property ;
    rdfs:label "arrivalTerminal" ;
    rdfs:comment "Identifier of the flight's arrival terminal." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:arrivalTime a rdf:Property ;
    rdfs:label "arrivalTime" ;
    rdfs:comment "The expected arrival time." ;
    schema:domainIncludes schema:Trip ;
    schema:rangeIncludes schema:DateTime,
        schema:Time .

schema:artEdition a rdf:Property ;
    rdfs:label "artEdition" ;
    rdfs:comment "The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example \\"20\\")." ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Integer,
        schema:Text .

schema:artMedium a rdf:Property ;
    rdfs:label "artMedium" ;
    rdfs:comment "The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)" ;
    rdfs:subPropertyOf schema:material ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:artform a rdf:Property ;
    rdfs:label "artform" ;
    rdfs:comment "e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc." ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:articleBody a rdf:Property ;
    rdfs:label "articleBody" ;
    rdfs:comment "The actual body of the article." ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Text .

schema:articleSection a rdf:Property ;
    rdfs:label "articleSection" ;
    rdfs:comment "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc." ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Text .

schema:artist a rdf:Property ;
    rdfs:label "artist" ;
    rdfs:comment """The primary artist for a work
    	in a medium other than pencils or digital line art--for example, if the
    	primary artwork is done in watercolors or digital paints.""" ;
    schema:domainIncludes schema:ComicIssue,
        schema:ComicStory,
        schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:aspect a rdf:Property ;
    rdfs:label "aspect" ;
    rdfs:comment "An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc." ;
    schema:domainIncludes schema:MedicalWebPage ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:mainContentOfPage .

schema:assembly a rdf:Property ;
    rdfs:label "assembly" ;
    rdfs:comment "Library file name e.g., mscorlib.dll, system.web.dll." ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:executableLibraryName .

schema:assemblyVersion a rdf:Property ;
    rdfs:label "assemblyVersion" ;
    rdfs:comment "Associated product/technology version. e.g., .NET Framework 4.5." ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text .

schema:assesses a rdf:Property ;
    rdfs:label "assesses" ;
    rdfs:comment "The item being described is intended to assess the competency or learning outcome defined by the referenced term." ;
    schema:domainIncludes schema:CreativeWork,
        schema:EducationEvent,
        schema:LearningResource ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2427> .

schema:associatedAnatomy a rdf:Property ;
    rdfs:label "associatedAnatomy" ;
    rdfs:comment "The anatomy of the underlying organ system or structures associated with this entity." ;
    schema:domainIncludes schema:MedicalCondition,
        schema:PhysicalActivity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem,
        schema:SuperficialAnatomy .

schema:associatedArticle a rdf:Property ;
    rdfs:label "associatedArticle" ;
    rdfs:comment "A NewsArticle associated with the Media Object." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:NewsArticle .

schema:associatedMedia a rdf:Property ;
    rdfs:label "associatedMedia" ;
    rdfs:comment "A media object that encodes this CreativeWork. This property is a synonym for encoding." ;
    schema:domainIncludes schema:CreativeWork,
        schema:HyperToc,
        schema:HyperTocEntry ;
    schema:rangeIncludes schema:MediaObject .

schema:associatedPathophysiology a rdf:Property ;
    rdfs:label "associatedPathophysiology" ;
    rdfs:comment "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system." ;
    schema:domainIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem,
        schema:SuperficialAnatomy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:athlete a rdf:Property ;
    rdfs:label "athlete" ;
    rdfs:comment "A person that acts as performing member of a sports team; a player as opposed to a coach." ;
    schema:domainIncludes schema:SportsTeam ;
    schema:rangeIncludes schema:Person .

schema:attendees a rdf:Property ;
    rdfs:label "attendees" ;
    rdfs:comment "A person attending the event." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:attendee .

schema:audienceType a rdf:Property ;
    rdfs:label "audienceType" ;
    rdfs:comment "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.)." ;
    schema:domainIncludes schema:Audience ;
    schema:rangeIncludes schema:Text .

schema:audio a rdf:Property ;
    rdfs:label "audio" ;
    rdfs:comment "An embedded audio object." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:AudioObject,
        schema:Clip,
        schema:MusicRecording ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2420> .

schema:authenticator a rdf:Property ;
    rdfs:label "authenticator" ;
    rdfs:comment "The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media." ;
    schema:domainIncludes schema:MediaSubscription ;
    schema:rangeIncludes schema:Organization ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:author a rdf:Property ;
    rdfs:label "author" ;
    rdfs:comment "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Rating ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:availability a rdf:Property ;
    rdfs:label "availability" ;
    rdfs:comment "The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:ItemAvailability .

schema:availabilityEnds a rdf:Property ;
    rdfs:label "availabilityEnds" ;
    rdfs:comment "The end of the availability of the product or service included in the offer." ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:Date,
        schema:DateTime,
        schema:Time ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:availabilityStarts a rdf:Property ;
    rdfs:label "availabilityStarts" ;
    rdfs:comment "The beginning of the availability of the product or service included in the offer." ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:Date,
        schema:DateTime,
        schema:Time ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:availableAtOrFrom a rdf:Property ;
    rdfs:label "availableAtOrFrom" ;
    rdfs:comment "The place(s) from which the offer can be obtained (e.g. store locations)." ;
    rdfs:subPropertyOf schema:areaServed ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:Place ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:availableChannel a rdf:Property ;
    rdfs:label "availableChannel" ;
    rdfs:comment "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.)." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:ServiceChannel .

schema:availableDeliveryMethod a rdf:Property ;
    rdfs:label "availableDeliveryMethod" ;
    rdfs:comment "The delivery method(s) available for this offer." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:DeliveryMethod ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:availableFrom a rdf:Property ;
    rdfs:label "availableFrom" ;
    rdfs:comment "When the item is available for pickup from the store, locker, etc." ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:DateTime .

schema:availableIn a rdf:Property ;
    rdfs:label "availableIn" ;
    rdfs:comment "The location in which the strength is available." ;
    schema:domainIncludes schema:DrugStrength ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea .

schema:availableLanguage a rdf:Property ;
    rdfs:label "availableLanguage" ;
    rdfs:comment "A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]" ;
    schema:domainIncludes schema:ContactPoint,
        schema:LodgingBusiness,
        schema:ServiceChannel,
        schema:TouristAttraction ;
    schema:rangeIncludes schema:Language,
        schema:Text .

schema:availableService a rdf:Property ;
    rdfs:label "availableService" ;
    rdfs:comment "A medical service available from this provider." ;
    schema:domainIncludes schema:Hospital,
        schema:MedicalClinic,
        schema:Physician ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalProcedure,
        schema:MedicalTest,
        schema:MedicalTherapy .

schema:availableStrength a rdf:Property ;
    rdfs:label "availableStrength" ;
    rdfs:comment "An available dosage strength for the drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugStrength .

schema:availableTest a rdf:Property ;
    rdfs:label "availableTest" ;
    rdfs:comment "A diagnostic test or procedure offered by this lab." ;
    schema:domainIncludes schema:DiagnosticLab ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTest .

schema:availableThrough a rdf:Property ;
    rdfs:label "availableThrough" ;
    rdfs:comment "After this date, the item will no longer be available for pickup." ;
    schema:domainIncludes schema:DeliveryEvent ;
    schema:rangeIncludes schema:DateTime .

schema:awards a rdf:Property ;
    rdfs:label "awards" ;
    rdfs:comment "Awards won by or for this item." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:award .

schema:awayTeam a rdf:Property ;
    rdfs:label "awayTeam" ;
    rdfs:comment "The away team in a sports event." ;
    rdfs:subPropertyOf schema:competitor ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam .

schema:backstory a rdf:Property ;
    rdfs:label "backstory" ;
    rdfs:comment "For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc." ;
    schema:domainIncludes schema:Article ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1688>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:bankAccountType a rdf:Property ;
    rdfs:label "bankAccountType" ;
    rdfs:comment "The type of a bank account." ;
    schema:domainIncludes schema:BankAccount ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:baseSalary a rdf:Property ;
    rdfs:label "baseSalary" ;
    rdfs:comment "The base salary of the job or of an employee in an EmployeeRole." ;
    schema:domainIncludes schema:EmployeeRole,
        schema:JobPosting ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number,
        schema:PriceSpecification .

schema:bccRecipient a rdf:Property ;
    rdfs:label "bccRecipient" ;
    rdfs:comment "A sub property of recipient. The recipient blind copied on a message." ;
    rdfs:subPropertyOf schema:recipient ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person .

schema:bed a rdf:Property ;
    rdfs:label "bed" ;
    rdfs:comment """The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.""" ;
    schema:domainIncludes schema:HotelRoom,
        schema:Suite ;
    schema:rangeIncludes schema:BedDetails,
        schema:BedType,
        schema:Text ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:beforeMedia a rdf:Property ;
    rdfs:label "beforeMedia" ;
    rdfs:comment "A media object representing the circumstances before performing this direction." ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL .

schema:beneficiaryBank a rdf:Property ;
    rdfs:label "beneficiaryBank" ;
    rdfs:comment "A bank or bankâ€™s branch, financial institution or international financial institution operating the beneficiaryâ€™s bank account or releasing funds for the beneficiary." ;
    schema:domainIncludes schema:MoneyTransfer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:BankOrCreditUnion,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:benefits a rdf:Property ;
    rdfs:label "benefits" ;
    rdfs:comment "Description of benefits associated with the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:jobBenefits .

schema:benefitsSummaryUrl a rdf:Property ;
    rdfs:label "benefitsSummaryUrl" ;
    rdfs:comment "The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:bestRating a rdf:Property ;
    rdfs:label "bestRating" ;
    rdfs:comment "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed." ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:billingAddress a rdf:Property ;
    rdfs:label "billingAddress" ;
    rdfs:comment "The billing address for the order." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:PostalAddress .

schema:billingDuration a rdf:Property ;
    rdfs:label "billingDuration" ;
    rdfs:comment "Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property)." ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration,
        schema:Number,
        schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:billingIncrement a rdf:Property ;
    rdfs:label "billingIncrement" ;
    rdfs:comment "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property." ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:billingPeriod a rdf:Property ;
    rdfs:label "billingPeriod" ;
    rdfs:comment "The time interval used to compute the invoice." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Duration .

schema:billingStart a rdf:Property ;
    rdfs:label "billingStart" ;
    rdfs:comment "Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property." ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:biomechnicalClass a rdf:Property ;
    rdfs:label "biomechnicalClass" ;
    rdfs:comment "The biomechanical properties of the bone." ;
    schema:domainIncludes schema:Joint ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:birthDate a rdf:Property ;
    rdfs:label "birthDate" ;
    rdfs:comment "Date of birth." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Date .

schema:birthPlace a rdf:Property ;
    rdfs:label "birthPlace" ;
    rdfs:comment "The place where the person was born." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Place .

schema:bitrate a rdf:Property ;
    rdfs:label "bitrate" ;
    rdfs:comment "The bitrate of the media object." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text .

schema:blogPosts a rdf:Property ;
    rdfs:label "blogPosts" ;
    rdfs:comment "The postings that are part of this blog." ;
    schema:domainIncludes schema:Blog ;
    schema:rangeIncludes schema:BlogPosting ;
    schema:supersededBy schema:blogPost .

schema:bloodSupply a rdf:Property ;
    rdfs:label "bloodSupply" ;
    rdfs:comment "The blood vessel that carries blood from the heart to the muscle." ;
    schema:domainIncludes schema:Muscle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Vessel .

schema:boardingGroup a rdf:Property ;
    rdfs:label "boardingGroup" ;
    rdfs:comment "The airline-specific indicator of boarding order / preference." ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text .

schema:boardingPolicy a rdf:Property ;
    rdfs:label "boardingPolicy" ;
    rdfs:comment "The type of boarding policy used by the airline (e.g. zone-based or group-based)." ;
    schema:domainIncludes schema:Airline,
        schema:Flight ;
    schema:rangeIncludes schema:BoardingPolicyType .

schema:bodyLocation a rdf:Property ;
    rdfs:label "bodyLocation" ;
    rdfs:comment "Location in the body of the anatomical structure." ;
    schema:domainIncludes schema:AnatomicalStructure,
        schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:bodyType a rdf:Property ;
    rdfs:label "bodyType" ;
    rdfs:comment "Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:bookEdition a rdf:Property ;
    rdfs:label "bookEdition" ;
    rdfs:comment "The edition of the book." ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Text .

schema:bookFormat a rdf:Property ;
    rdfs:label "bookFormat" ;
    rdfs:comment "The format of the book." ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:BookFormatType .

schema:bookingAgent a rdf:Property ;
    rdfs:label "bookingAgent" ;
    rdfs:comment "'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:broker .

schema:bookingTime a rdf:Property ;
    rdfs:label "bookingTime" ;
    rdfs:comment "The date and time the reservation was booked." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:DateTime .

schema:borrower a rdf:Property ;
    rdfs:label "borrower" ;
    rdfs:comment "A sub property of participant. The person that borrows the object being lent." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:LendAction ;
    schema:rangeIncludes schema:Person .

schema:box a rdf:Property ;
    rdfs:label "box" ;
    rdfs:comment "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character." ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text .

schema:branch a rdf:Property ;
    rdfs:label "branch" ;
    rdfs:comment "The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]]." ;
    schema:domainIncludes schema:Nerve ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure ;
    schema:supersededBy schema:arterialBranch .

schema:branchCode a rdf:Property ;
    rdfs:label "branchCode" ;
    rdfs:comment """A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\\\\n\\\\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
      """ ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Text .

schema:branchOf a rdf:Property ;
    rdfs:label "branchOf" ;
    rdfs:comment "The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]]." ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Organization ;
    schema:supersededBy schema:parentOrganization .

schema:brand a rdf:Property ;
    rdfs:label "brand" ;
    rdfs:comment "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person." ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Brand,
        schema:Organization .

schema:breadcrumb a rdf:Property ;
    rdfs:label "breadcrumb" ;
    rdfs:comment "A set of links that can help a user understand and navigate a website hierarchy." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:BreadcrumbList,
        schema:Text .

schema:breastfeedingWarning a rdf:Property ;
    rdfs:label "breastfeedingWarning" ;
    rdfs:comment "Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:broadcastAffiliateOf a rdf:Property ;
    rdfs:label "broadcastAffiliateOf" ;
    rdfs:comment "The media network(s) whose content is broadcast on this station." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Organization .

schema:broadcastChannelId a rdf:Property ;
    rdfs:label "broadcastChannelId" ;
    rdfs:comment "The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number." ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:Text .

schema:broadcastDisplayName a rdf:Property ;
    rdfs:label "broadcastDisplayName" ;
    rdfs:comment "The name displayed in the channel guide. For many US affiliates, it is the network name." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Text .

schema:broadcastFrequency a rdf:Property ;
    rdfs:label "broadcastFrequency" ;
    rdfs:comment "The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. \\"87 FM\\"." ;
    schema:domainIncludes schema:BroadcastChannel,
        schema:BroadcastService ;
    schema:rangeIncludes schema:BroadcastFrequencySpecification,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:broadcastFrequencyValue a rdf:Property ;
    rdfs:label "broadcastFrequencyValue" ;
    rdfs:comment "The frequency in MHz for a particular broadcast." ;
    schema:domainIncludes schema:BroadcastFrequencySpecification ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:broadcastOfEvent a rdf:Property ;
    rdfs:label "broadcastOfEvent" ;
    rdfs:comment "The event being broadcast such as a sporting event or awards ceremony." ;
    schema:domainIncludes schema:BroadcastEvent ;
    schema:rangeIncludes schema:Event .

schema:broadcastServiceTier a rdf:Property ;
    rdfs:label "broadcastServiceTier" ;
    rdfs:comment "The type of service required to have access to the channel (e.g. Standard or Premium)." ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:Text .

schema:broadcastSignalModulation a rdf:Property ;
    rdfs:label "broadcastSignalModulation" ;
    rdfs:comment "The modulation (e.g. FM, AM, etc) used by a particular broadcast service." ;
    schema:domainIncludes schema:BroadcastFrequencySpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2111> .

schema:broadcastSubChannel a rdf:Property ;
    rdfs:label "broadcastSubChannel" ;
    rdfs:comment "The subchannel used for the broadcast." ;
    schema:domainIncludes schema:BroadcastFrequencySpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2111> .

schema:broadcastTimezone a rdf:Property ;
    rdfs:label "broadcastTimezone" ;
    rdfs:comment "The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts" ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Text .

schema:broadcaster a rdf:Property ;
    rdfs:label "broadcaster" ;
    rdfs:comment "The organization owning or operating the broadcast service." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:Organization .

schema:browserRequirements a rdf:Property ;
    rdfs:label "browserRequirements" ;
    rdfs:comment "Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'." ;
    schema:domainIncludes schema:WebApplication ;
    schema:rangeIncludes schema:Text .

schema:busName a rdf:Property ;
    rdfs:label "busName" ;
    rdfs:comment "The name of the bus (e.g. Bolt Express)." ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:Text .

schema:busNumber a rdf:Property ;
    rdfs:label "busNumber" ;
    rdfs:comment "The unique identifier for the bus." ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:Text .

schema:businessDays a rdf:Property ;
    rdfs:label "businessDays" ;
    rdfs:comment "Days of the week when the merchant typically operates, indicated via opening hours markup." ;
    schema:domainIncludes schema:ShippingDeliveryTime ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:OpeningHoursSpecification ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:businessFunction a rdf:Property ;
    rdfs:label "businessFunction" ;
    rdfs:comment "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:BusinessFunction ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:buyer a rdf:Property ;
    rdfs:label "buyer" ;
    rdfs:comment "A sub property of participant. The participant/person/organization that bought the object." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:SellAction ;
    schema:rangeIncludes schema:Person .

schema:byArtist a rdf:Property ;
    rdfs:label "byArtist" ;
    rdfs:comment "The artist that performed this album or recording." ;
    schema:domainIncludes schema:MusicAlbum,
        schema:MusicRecording ;
    schema:rangeIncludes schema:MusicGroup,
        schema:Person .

schema:byDay a rdf:Property ;
    rdfs:label "byDay" ;
    rdfs:comment "Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules." ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DayOfWeek,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:byMonth a rdf:Property ;
    rdfs:label "byMonth" ;
    rdfs:comment "Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1." ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:byMonthDay a rdf:Property ;
    rdfs:label "byMonthDay" ;
    rdfs:comment "Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31." ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:byMonthWeek a rdf:Property ;
    rdfs:label "byMonthWeek" ;
    rdfs:comment "Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month." ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2599> .

schema:callSign a rdf:Property ;
    rdfs:label "callSign" ;
    rdfs:comment "A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:BroadcastService,
        schema:Person,
        schema:Vehicle ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2109> .

schema:calories a rdf:Property ;
    rdfs:label "calories" ;
    rdfs:comment "The number of calories." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Energy .

schema:candidate a rdf:Property ;
    rdfs:label "candidate" ;
    rdfs:comment "A sub property of object. The candidate subject of this action." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:VoteAction ;
    schema:rangeIncludes schema:Person .

schema:caption a rdf:Property ;
    rdfs:label "caption" ;
    rdfs:comment "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]]." ;
    schema:domainIncludes schema:AudioObject,
        schema:ImageObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:MediaObject,
        schema:Text .

schema:carbohydrateContent a rdf:Property ;
    rdfs:label "carbohydrateContent" ;
    rdfs:comment "The number of grams of carbohydrates." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:cargoVolume a rdf:Property ;
    rdfs:label "cargoVolume" ;
    rdfs:comment "The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\\\\n\\\\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\\\\n\\\\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:carrier a rdf:Property ;
    rdfs:label "carrier" ;
    rdfs:comment "'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights." ;
    schema:domainIncludes schema:Flight,
        schema:ParcelDelivery ;
    schema:rangeIncludes schema:Organization ;
    schema:supersededBy schema:provider .

schema:carrierRequirements a rdf:Property ;
    rdfs:label "carrierRequirements" ;
    rdfs:comment "Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network)." ;
    schema:domainIncludes schema:MobileApplication ;
    schema:rangeIncludes schema:Text .

schema:cashBack a rdf:Property ;
    rdfs:label "cashBack" ;
    rdfs:comment "A cardholder benefit that pays the cardholder a small percentage of their net expenditures." ;
    schema:domainIncludes schema:PaymentCard ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean,
        schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:catalog a rdf:Property ;
    rdfs:label "catalog" ;
    rdfs:comment "A data catalog which contains this dataset." ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataCatalog ;
    schema:supersededBy schema:includedInDataCatalog .

schema:catalogNumber a rdf:Property ;
    rdfs:label "catalogNumber" ;
    rdfs:comment "The catalog number for the release." ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:causeOf a rdf:Property ;
    rdfs:label "causeOf" ;
    rdfs:comment "The condition, complication, symptom, sign, etc. caused." ;
    schema:domainIncludes schema:MedicalCause ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:ccRecipient a rdf:Property ;
    rdfs:label "ccRecipient" ;
    rdfs:comment "A sub property of recipient. The recipient copied on a message." ;
    rdfs:subPropertyOf schema:recipient ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person .

schema:character a rdf:Property ;
    rdfs:label "character" ;
    rdfs:comment "Fictional person connected with a creative work." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person .

schema:characterAttribute a rdf:Property ;
    rdfs:label "characterAttribute" ;
    rdfs:comment "A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage)." ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing .

schema:characterName a rdf:Property ;
    rdfs:label "characterName" ;
    rdfs:comment "The name of a character played in some acting or performing role, i.e. in a PerformanceRole." ;
    schema:domainIncludes schema:PerformanceRole ;
    schema:rangeIncludes schema:Text .

schema:cheatCode a rdf:Property ;
    rdfs:label "cheatCode" ;
    rdfs:comment "Cheat codes to the game." ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWork .

schema:checkinTime a rdf:Property ;
    rdfs:label "checkinTime" ;
    rdfs:comment "The earliest someone may check into a lodging establishment." ;
    schema:domainIncludes schema:LodgingBusiness,
        schema:LodgingReservation ;
    schema:rangeIncludes schema:DateTime,
        schema:Time .

schema:checkoutTime a rdf:Property ;
    rdfs:label "checkoutTime" ;
    rdfs:comment "The latest someone may check out of a lodging establishment." ;
    schema:domainIncludes schema:LodgingBusiness,
        schema:LodgingReservation ;
    schema:rangeIncludes schema:DateTime,
        schema:Time .

schema:childMaxAge a rdf:Property ;
    rdfs:label "childMaxAge" ;
    rdfs:comment "Maximal age of the child." ;
    schema:domainIncludes schema:ParentAudience ;
    schema:rangeIncludes schema:Number .

schema:childMinAge a rdf:Property ;
    rdfs:label "childMinAge" ;
    rdfs:comment "Minimal age of the child." ;
    schema:domainIncludes schema:ParentAudience ;
    schema:rangeIncludes schema:Number .

schema:children a rdf:Property ;
    rdfs:label "children" ;
    rdfs:comment "A child of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:cholesterolContent a rdf:Property ;
    rdfs:label "cholesterolContent" ;
    rdfs:comment "The number of milligrams of cholesterol." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:circle a rdf:Property ;
    rdfs:label "circle" ;
    rdfs:comment "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters." ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text .

schema:citation a rdf:Property ;
    rdfs:label "citation" ;
    rdfs:comment "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Text .

schema:claimReviewed a rdf:Property ;
    rdfs:label "claimReviewed" ;
    rdfs:comment "A short summary of the specific claims reviewed in a ClaimReview." ;
    schema:domainIncludes schema:ClaimReview ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1061> .

schema:clincalPharmacology a rdf:Property ;
    rdfs:label "clincalPharmacology" ;
    rdfs:comment "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD)." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:clinicalPharmacology .

schema:clipNumber a rdf:Property ;
    rdfs:label "clipNumber" ;
    rdfs:comment "Position of the clip within an ordered group of clips." ;
    rdfs:subPropertyOf schema:position ;
    schema:domainIncludes schema:Clip ;
    schema:rangeIncludes schema:Integer,
        schema:Text .

schema:closes a rdf:Property ;
    rdfs:label "closes" ;
    rdfs:comment "The closing hour of the place or service on the given day(s) of the week." ;
    schema:domainIncludes schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:Time ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:coach a rdf:Property ;
    rdfs:label "coach" ;
    rdfs:comment "A person that acts in a coaching role for a sports team." ;
    schema:domainIncludes schema:SportsTeam ;
    schema:rangeIncludes schema:Person .

schema:code a rdf:Property ;
    rdfs:label "code" ;
    rdfs:comment "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalCode .

schema:codeRepository a rdf:Property ;
    rdfs:label "codeRepository" ;
    rdfs:comment "Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex)." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:URL .

schema:codeValue a rdf:Property ;
    rdfs:label "codeValue" ;
    rdfs:comment "A short textual code that uniquely identifies the value." ;
    rdfs:subPropertyOf schema:termCode ;
    schema:domainIncludes schema:CategoryCode,
        schema:MedicalCode ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:codingSystem a rdf:Property ;
    rdfs:label "codingSystem" ;
    rdfs:comment "The coding system, e.g. 'ICD-10'." ;
    schema:domainIncludes schema:MedicalCode ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:colleagues a rdf:Property ;
    rdfs:label "colleagues" ;
    rdfs:comment "A colleague of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:colleague .

schema:collection a rdf:Property ;
    rdfs:label "collection" ;
    rdfs:comment "A sub property of object. The collection target of the action." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:UpdateAction ;
    schema:rangeIncludes schema:Thing ;
    schema:supersededBy schema:targetCollection .

schema:collectionSize a rdf:Property ;
    rdfs:label "collectionSize"@en ;
    rdfs:comment "The number of items in the [[Collection]]."@en ;
    schema:domainIncludes schema:Collection ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1759> .

schema:color a rdf:Property ;
    rdfs:label "color" ;
    rdfs:comment "The color of the product." ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:colorist a rdf:Property ;
    rdfs:label "colorist" ;
    rdfs:comment "The individual who adds color to inked drawings." ;
    schema:domainIncludes schema:ComicIssue,
        schema:ComicStory,
        schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:comment a rdf:Property ;
    rdfs:label "comment" ;
    rdfs:comment "Comments, typically from users." ;
    schema:domainIncludes schema:CreativeWork,
        schema:RsvpAction ;
    schema:rangeIncludes schema:Comment .

schema:commentCount a rdf:Property ;
    rdfs:label "commentCount" ;
    rdfs:comment "The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Integer .

schema:commentText a rdf:Property ;
    rdfs:label "commentText" ;
    rdfs:comment "The text of the UserComment." ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:Text .

schema:commentTime a rdf:Property ;
    rdfs:label "commentTime" ;
    rdfs:comment "The time at which the UserComment was made." ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:competencyRequired a rdf:Property ;
    rdfs:label "competencyRequired" ;
    rdfs:comment "Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource." ;
    schema:domainIncludes schema:EducationalOccupationalCredential,
        schema:LearningResource ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:composer a rdf:Property ;
    rdfs:label "composer" ;
    rdfs:comment "The person or organization who wrote a composition, or who is the composer of a work performed at some event." ;
    schema:domainIncludes schema:Event,
        schema:MusicComposition ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:comprisedOf a rdf:Property ;
    rdfs:label "comprisedOf" ;
    rdfs:comment "Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system." ;
    schema:domainIncludes schema:AnatomicalSystem ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem .

schema:conditionsOfAccess a rdf:Property ;
    rdfs:label "conditionsOfAccess" ;
    rdfs:comment "Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\\\\n\\\\nFor example \\"Available by appointment from the Reading Room\\" or \\"Accessible only from logged-in accounts \\". " ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2173> .

schema:confirmationNumber a rdf:Property ;
    rdfs:label "confirmationNumber" ;
    rdfs:comment "A number that confirms the given order or payment has been received." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Text .

schema:connectedTo a rdf:Property ;
    rdfs:label "connectedTo" ;
    rdfs:comment "Other anatomical structures to which this structure is connected." ;
    schema:domainIncludes schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:constrainingProperty a rdf:Property ;
    rdfs:label "constrainingProperty" ;
    rdfs:comment """Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities
  corresponding to an indicated type (via [[populationType]]).""" ;
    schema:domainIncludes schema:StatisticalPopulation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:contactOption a rdf:Property ;
    rdfs:label "contactOption" ;
    rdfs:comment "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers)." ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:ContactPointOption .

schema:contactPoints a rdf:Property ;
    rdfs:label "contactPoints" ;
    rdfs:comment "A contact point for a person or organization." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:ContactPoint ;
    schema:supersededBy schema:contactPoint .

schema:contactType a rdf:Property ;
    rdfs:label "contactType" ;
    rdfs:comment "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point." ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:Text .

schema:contactlessPayment a rdf:Property ;
    rdfs:label "contactlessPayment" ;
    rdfs:comment "A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology." ;
    schema:domainIncludes schema:PaymentCard ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:containedIn a rdf:Property ;
    rdfs:label "containedIn" ;
    rdfs:comment "The basic containment relation between a place and one that contains it." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:containedInPlace .

schema:contentRating a rdf:Property ;
    rdfs:label "contentRating" ;
    rdfs:comment "Official rating of a piece of content&#x2014;for example,'MPAA PG-13'." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Rating,
        schema:Text .

schema:contentReferenceTime a rdf:Property ;
    rdfs:label "contentReferenceTime" ;
    rdfs:comment "The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1050> .

schema:contentSize a rdf:Property ;
    rdfs:label "contentSize" ;
    rdfs:comment "File size in (mega/kilo) bytes." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text .

schema:contentType a rdf:Property ;
    rdfs:label "contentType" ;
    rdfs:comment "The supported content type(s) for an EntryPoint response." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text .

schema:contentUrl a rdf:Property ;
    rdfs:label "contentUrl" ;
    rdfs:comment "Actual bytes of the media object, for example the image file or video file." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:URL .

schema:contraindication a rdf:Property ;
    rdfs:label "contraindication" ;
    rdfs:comment "A contraindication for this therapy." ;
    schema:domainIncludes schema:MedicalDevice,
        schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalContraindication,
        schema:Text .

schema:contributor a rdf:Property ;
    rdfs:label "contributor" ;
    rdfs:comment "A secondary contributor to the CreativeWork or Event." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:cookTime a rdf:Property ;
    rdfs:label "cookTime" ;
    rdfs:comment "The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)." ;
    rdfs:subPropertyOf schema:performTime ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Duration .

schema:cookingMethod a rdf:Property ;
    rdfs:label "cookingMethod" ;
    rdfs:comment "The method of cooking, such as Frying, Steaming, ..." ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text .

schema:copyrightHolder a rdf:Property ;
    rdfs:label "copyrightHolder" ;
    rdfs:comment "The party holding the legal copyright to the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:copyrightNotice a rdf:Property ;
    rdfs:label "copyrightNotice" ;
    rdfs:comment "Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2659> .

schema:copyrightYear a rdf:Property ;
    rdfs:label "copyrightYear" ;
    rdfs:comment "The year during which the claimed copyright for the CreativeWork was first asserted." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Number .

schema:correction a rdf:Property ;
    rdfs:label "correction" ;
    rdfs:comment "Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CorrectionComment,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1950>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:correctionsPolicy a rdf:Property ;
    rdfs:label "correctionsPolicy" ;
    rdfs:comment "For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroomâ€™s) disclosure and correction policy for errors." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:costCategory a rdf:Property ;
    rdfs:label "costCategory" ;
    rdfs:comment "The category of cost, such as wholesale, retail, reimbursement cap, etc." ;
    schema:domainIncludes schema:DrugCost ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugCostCategory .

schema:costCurrency a rdf:Property ;
    rdfs:label "costCurrency" ;
    rdfs:comment "The currency (in 3-letter of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. " ;
    schema:domainIncludes schema:DrugCost ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:costOrigin a rdf:Property ;
    rdfs:label "costOrigin" ;
    rdfs:comment "Additional details to capture the origin of the cost data. For example, 'Medicare Part B'." ;
    schema:domainIncludes schema:DrugCost ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:costPerUnit a rdf:Property ;
    rdfs:label "costPerUnit" ;
    rdfs:comment "The cost per unit of the drug." ;
    schema:domainIncludes schema:DrugCost ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QualitativeValue,
        schema:Text .

schema:countriesNotSupported a rdf:Property ;
    rdfs:label "countriesNotSupported" ;
    rdfs:comment "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:countriesSupported a rdf:Property ;
    rdfs:label "countriesSupported" ;
    rdfs:comment "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:countryOfOrigin a rdf:Property ;
    rdfs:label "countryOfOrigin" ;
    rdfs:comment "The country of the principal offices of the production company or individual responsible for the movie or program." ;
    schema:domainIncludes schema:Movie,
        schema:TVEpisode,
        schema:TVSeason,
        schema:TVSeries ;
    schema:rangeIncludes schema:Country .

schema:course a rdf:Property ;
    rdfs:label "course" ;
    rdfs:comment "A sub property of location. The course where this action was taken." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Place ;
    schema:supersededBy schema:exerciseCourse .

schema:courseCode a rdf:Property ;
    rdfs:label "courseCode" ;
    rdfs:comment "The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001)." ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:Text .

schema:courseMode a rdf:Property ;
    rdfs:label "courseMode" ;
    rdfs:comment "The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. \\"online\\", \\"onsite\\" or \\"blended\\"; \\"synchronous\\" or \\"asynchronous\\"; \\"full-time\\" or \\"part-time\\") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous )." ;
    schema:domainIncludes schema:CourseInstance ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:coursePrerequisites a rdf:Property ;
    rdfs:label "coursePrerequisites" ;
    rdfs:comment "Requirements for taking the Course. May be completion of another [[Course]] or a textual description like \\"permission of instructor\\". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]]." ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:AlignmentObject,
        schema:Course,
        schema:Text .

schema:courseWorkload a rdf:Property ;
    rdfs:label "courseWorkload" ;
    rdfs:comment "The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, \\"2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week\\"." ;
    schema:domainIncludes schema:CourseInstance ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1909> .

schema:coverageEndTime a rdf:Property ;
    rdfs:label "coverageEndTime" ;
    rdfs:comment "The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes." ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:DateTime .

schema:coverageStartTime a rdf:Property ;
    rdfs:label "coverageStartTime" ;
    rdfs:comment "The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins." ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:DateTime .

schema:creativeWorkStatus a rdf:Property ;
    rdfs:label "creativeWorkStatus" ;
    rdfs:comment "The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/987> .

schema:credentialCategory a rdf:Property ;
    rdfs:label "credentialCategory" ;
    rdfs:comment "The category or type of credential being described, for example \\"degreeâ€, â€œcertificateâ€, â€œbadgeâ€, or more specific term." ;
    schema:domainIncludes schema:EducationalOccupationalCredential ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:creditText a rdf:Property ;
    rdfs:label "creditText" ;
    rdfs:comment "Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2659> .

schema:creditedTo a rdf:Property ;
    rdfs:label "creditedTo" ;
    rdfs:comment "The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \\"Stefani Germanotta Band\\", but by Lady Gaga." ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:cssSelector a rdf:Property ;
    rdfs:label "cssSelector" ;
    rdfs:comment "A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \\"Web page element\\"." ;
    schema:domainIncludes schema:SpeakableSpecification,
        schema:WebPageElement ;
    schema:rangeIncludes schema:CssSelectorType ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1389> .

schema:currenciesAccepted a rdf:Property ;
    rdfs:label "currenciesAccepted" ;
    rdfs:comment "The currency accepted.\\\\n\\\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. \\"USD\\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. \\"BTC\\"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. \\"Ithaca HOUR\\"." ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text .

schema:currency a rdf:Property ;
    rdfs:label "currency" ;
    rdfs:comment "The currency in which the monetary amount is expressed.\\\\n\\\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. \\"USD\\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. \\"BTC\\"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. \\"Ithaca HOUR\\"." ;
    schema:domainIncludes schema:DatedMoneySpecification,
        schema:ExchangeRateSpecification,
        schema:LoanOrCredit,
        schema:MonetaryAmount,
        schema:MonetaryAmountDistribution ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:currentExchangeRate a rdf:Property ;
    rdfs:label "currentExchangeRate" ;
    rdfs:comment "The current price of a currency." ;
    schema:domainIncludes schema:ExchangeRateSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:UnitPriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:customer a rdf:Property ;
    rdfs:label "customer" ;
    rdfs:comment "Party placing the order or paying the invoice." ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:cutoffTime a rdf:Property ;
    rdfs:label "cutoffTime" ;
    rdfs:comment "Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. \\"23:30:00-05:00\\" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC)." ;
    schema:domainIncludes schema:ShippingDeliveryTime ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Time ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:cvdCollectionDate a rdf:Property ;
    rdfs:label "cvdCollectionDate" ;
    rdfs:comment "collectiondate - Date for which patient counts are reported." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DateTime,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdFacilityCounty a rdf:Property ;
    rdfs:label "cvdFacilityCounty" ;
    rdfs:comment "Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdFacilityId a rdf:Property ;
    rdfs:label "cvdFacilityId" ;
    rdfs:comment "Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumBeds a rdf:Property ;
    rdfs:label "cvdNumBeds" ;
    rdfs:comment "numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumBedsOcc a rdf:Property ;
    rdfs:label "cvdNumBedsOcc" ;
    rdfs:comment "numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19Died a rdf:Property ;
    rdfs:label "cvdNumC19Died" ;
    rdfs:comment "numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19HOPats a rdf:Property ;
    rdfs:label "cvdNumC19HOPats" ;
    rdfs:comment "numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19HospPats a rdf:Property ;
    rdfs:label "cvdNumC19HospPats" ;
    rdfs:comment "numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19MechVentPats a rdf:Property ;
    rdfs:label "cvdNumC19MechVentPats" ;
    rdfs:comment "numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19OFMechVentPats a rdf:Property ;
    rdfs:label "cvdNumC19OFMechVentPats" ;
    rdfs:comment "numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumC19OverflowPats a rdf:Property ;
    rdfs:label "cvdNumC19OverflowPats" ;
    rdfs:comment "numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumICUBeds a rdf:Property ;
    rdfs:label "cvdNumICUBeds" ;
    rdfs:comment "numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumICUBedsOcc a rdf:Property ;
    rdfs:label "cvdNumICUBedsOcc" ;
    rdfs:comment "numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumTotBeds a rdf:Property ;
    rdfs:label "cvdNumTotBeds" ;
    rdfs:comment "numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumVent a rdf:Property ;
    rdfs:label "cvdNumVent" ;
    rdfs:comment "numvent - MECHANICAL VENTILATORS: Total number of ventilators available." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:cvdNumVentUse a rdf:Property ;
    rdfs:label "cvdNumVentUse" ;
    rdfs:comment "numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use." ;
    schema:domainIncludes schema:CDCPMDRecord ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:dataFeedElement a rdf:Property ;
    rdfs:label "dataFeedElement" ;
    rdfs:comment "An item within in a data feed. Data feeds may have many elements." ;
    schema:domainIncludes schema:DataFeed ;
    schema:rangeIncludes schema:DataFeedItem,
        schema:Text,
        schema:Thing .

schema:datasetTimeInterval a rdf:Property ;
    rdfs:label "datasetTimeInterval" ;
    rdfs:comment "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format)." ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DateTime ;
    schema:supersededBy schema:temporalCoverage .

schema:dateDeleted a rdf:Property ;
    rdfs:label "dateDeleted" ;
    rdfs:comment "The datetime the item was removed from the DataFeed." ;
    schema:domainIncludes schema:DataFeedItem ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:dateIssued a rdf:Property ;
    rdfs:label "dateIssued" ;
    rdfs:comment "The date the ticket was issued." ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:dateModified a rdf:Property ;
    rdfs:label "dateModified" ;
    rdfs:comment "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed." ;
    schema:domainIncludes schema:CreativeWork,
        schema:DataFeedItem ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:datePosted a rdf:Property ;
    rdfs:label "datePosted" ;
    rdfs:comment "Publication date of an online listing." ;
    schema:domainIncludes schema:CDCPMDRecord,
        schema:JobPosting,
        schema:RealEstateListing,
        schema:SpecialAnnouncement ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490>,
        <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:datePublished a rdf:Property ;
    rdfs:label "datePublished" ;
    rdfs:comment "Date of first broadcast/publication." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:dateRead a rdf:Property ;
    rdfs:label "dateRead" ;
    rdfs:comment "The date/time at which the message has been read by the recipient if a single recipient exists." ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:dateReceived a rdf:Property ;
    rdfs:label "dateReceived" ;
    rdfs:comment "The date/time the message was received if a single recipient exists." ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:DateTime .

schema:dateSent a rdf:Property ;
    rdfs:label "dateSent" ;
    rdfs:comment "The date/time at which the message was sent." ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:DateTime .

schema:dateVehicleFirstRegistered a rdf:Property ;
    rdfs:label "dateVehicleFirstRegistered" ;
    rdfs:comment "The date of the first registration of the vehicle with the respective public authorities." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:dateline a rdf:Property ;
    rdfs:label "dateline" ;
    rdfs:comment """A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.

Structured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use [[contentLocation]].

Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
      """ ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text .

schema:dayOfWeek a rdf:Property ;
    rdfs:label "dayOfWeek" ;
    rdfs:comment "The day of the week for which these opening hours are valid." ;
    schema:domainIncludes schema:EducationalOccupationalProgram,
        schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:DayOfWeek ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:deathDate a rdf:Property ;
    rdfs:label "deathDate" ;
    rdfs:comment "Date of death." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Date .

schema:deathPlace a rdf:Property ;
    rdfs:label "deathPlace" ;
    rdfs:comment "The place where the person died." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Place .

schema:defaultValue a rdf:Property ;
    rdfs:label "defaultValue" ;
    rdfs:comment "The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text,
        schema:Thing .

schema:deliveryAddress a rdf:Property ;
    rdfs:label "deliveryAddress" ;
    rdfs:comment "Destination address." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:PostalAddress .

schema:deliveryLeadTime a rdf:Property ;
    rdfs:label "deliveryLeadTime" ;
    rdfs:comment "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:deliveryMethod a rdf:Property ;
    rdfs:label "deliveryMethod" ;
    rdfs:comment "A sub property of instrument. The method of delivery." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:OrderAction,
        schema:ReceiveAction,
        schema:SendAction,
        schema:TrackAction ;
    schema:rangeIncludes schema:DeliveryMethod .

schema:deliveryStatus a rdf:Property ;
    rdfs:label "deliveryStatus" ;
    rdfs:comment "New entry added as the package passes through each leg of its journey (from shipment to final delivery)." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:DeliveryEvent .

schema:deliveryTime a rdf:Property ;
    rdfs:label "deliveryTime" ;
    rdfs:comment "The total delay between the receipt of the order and the goods reaching the final customer." ;
    schema:domainIncludes schema:DeliveryTimeSettings,
        schema:OfferShippingDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ShippingDeliveryTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:department a rdf:Property ;
    rdfs:label "department" ;
    rdfs:comment "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Organization .

schema:departureAirport a rdf:Property ;
    rdfs:label "departureAirport" ;
    rdfs:comment "The airport where the flight originates." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Airport .

schema:departureBoatTerminal a rdf:Property ;
    rdfs:label "departureBoatTerminal" ;
    rdfs:comment "The terminal or port from which the boat departs." ;
    schema:domainIncludes schema:BoatTrip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:BoatTerminal ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1755> .

schema:departureBusStop a rdf:Property ;
    rdfs:label "departureBusStop" ;
    rdfs:comment "The stop or station from which the bus departs." ;
    schema:domainIncludes schema:BusTrip ;
    schema:rangeIncludes schema:BusStation,
        schema:BusStop .

schema:departureGate a rdf:Property ;
    rdfs:label "departureGate" ;
    rdfs:comment "Identifier of the flight's departure gate." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:departurePlatform a rdf:Property ;
    rdfs:label "departurePlatform" ;
    rdfs:comment "The platform from which the train departs." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text .

schema:departureStation a rdf:Property ;
    rdfs:label "departureStation" ;
    rdfs:comment "The station from which the train departs." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:TrainStation .

schema:departureTerminal a rdf:Property ;
    rdfs:label "departureTerminal" ;
    rdfs:comment "Identifier of the flight's departure terminal." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:departureTime a rdf:Property ;
    rdfs:label "departureTime" ;
    rdfs:comment "The expected departure time." ;
    schema:domainIncludes schema:Trip ;
    schema:rangeIncludes schema:DateTime,
        schema:Time .

schema:dependencies a rdf:Property ;
    rdfs:label "dependencies" ;
    rdfs:comment "Prerequisites needed to fulfill steps in article." ;
    schema:domainIncludes schema:TechArticle ;
    schema:rangeIncludes schema:Text .

schema:depth a rdf:Property ;
    rdfs:label "depth" ;
    rdfs:comment "The depth of the item." ;
    schema:domainIncludes schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:device a rdf:Property ;
    rdfs:label "device" ;
    rdfs:comment "Device required to run the application. Used in cases where a specific make/model is required to run the application." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:availableOnDevice .

schema:diagnosis a rdf:Property ;
    rdfs:label "diagnosis" ;
    rdfs:comment "One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process." ;
    schema:domainIncludes schema:DDxElement,
        schema:Patient ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalCondition .

schema:diagram a rdf:Property ;
    rdfs:label "diagram" ;
    rdfs:comment "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures." ;
    schema:domainIncludes schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:ImageObject .

schema:diet a rdf:Property ;
    rdfs:label "diet" ;
    rdfs:comment "A sub property of instrument. The diet used in this action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Diet .

schema:dietFeatures a rdf:Property ;
    rdfs:label "dietFeatures" ;
    rdfs:comment "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines." ;
    schema:domainIncludes schema:Diet ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:differentialDiagnosis a rdf:Property ;
    rdfs:label "differentialDiagnosis" ;
    rdfs:comment "One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DDxElement .

schema:directors a rdf:Property ;
    rdfs:label "directors" ;
    rdfs:comment "A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip." ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:director .

schema:disambiguatingDescription a rdf:Property ;
    rdfs:label "disambiguatingDescription" ;
    rdfs:comment "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation." ;
    rdfs:subPropertyOf schema:description ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text .

schema:discount a rdf:Property ;
    rdfs:label "discount" ;
    rdfs:comment "Any discount applied (to an Order)." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:discountCode a rdf:Property ;
    rdfs:label "discountCode" ;
    rdfs:comment "Code used to redeem a discount." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text .

schema:discountCurrency a rdf:Property ;
    rdfs:label "discountCurrency" ;
    rdfs:comment "The currency of the discount.\\\\n\\\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. \\"USD\\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. \\"BTC\\"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. \\"Ithaca HOUR\\"." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text .

schema:discusses a rdf:Property ;
    rdfs:label "discusses" ;
    rdfs:comment "Specifies the CreativeWork associated with the UserComment." ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:CreativeWork .

schema:discussionUrl a rdf:Property ;
    rdfs:label "discussionUrl" ;
    rdfs:comment "A link to the page containing the comments of the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:URL .

schema:diseasePreventionInfo a rdf:Property ;
    rdfs:label "diseasePreventionInfo" ;
    rdfs:comment "Information about disease prevention." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:diseaseSpreadStatistics a rdf:Property ;
    rdfs:label "diseaseSpreadStatistics" ;
    rdfs:comment """Statistical information about the spread of a disease, either as [[WebContent]], or
  described directly as a [[Dataset]], or the specific [[Observation]]s in the dataset. When a [[WebContent]] URL is
  provided, the page indicated might also contain more such markup.""" ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Dataset,
        schema:Observation,
        schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:dissolutionDate a rdf:Property ;
    rdfs:label "dissolutionDate" ;
    rdfs:comment "The date that this organization was dissolved." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Date .

schema:distance a rdf:Property ;
    rdfs:label "distance" ;
    rdfs:comment "The distance travelled, e.g. exercising or travelling." ;
    schema:domainIncludes schema:ExerciseAction,
        schema:TravelAction ;
    schema:rangeIncludes schema:Distance .

schema:distinguishingSign a rdf:Property ;
    rdfs:label "distinguishingSign" ;
    rdfs:comment "One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis." ;
    schema:domainIncludes schema:DDxElement ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalSignOrSymptom .

schema:distribution a rdf:Property ;
    rdfs:label "distribution" ;
    rdfs:comment "A downloadable form of this dataset, at a specific location, in a specific format." ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataDownload .

schema:diversityPolicy a rdf:Property ;
    rdfs:label "diversityPolicy" ;
    rdfs:comment "Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroomâ€™s diversity policy on both staffing and sources, typically providing staffing data." ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:diversityStaffingReport a rdf:Property ;
    rdfs:label "diversityStaffingReport" ;
    rdfs:comment "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Article,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:documentation a rdf:Property ;
    rdfs:label "documentation" ;
    rdfs:comment "Further documentation describing the Web API in more detail." ;
    schema:domainIncludes schema:WebAPI ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1423> .

schema:doesNotShip a rdf:Property ;
    rdfs:label "doesNotShip" ;
    rdfs:comment "Indicates when shipping to a particular [[shippingDestination]] is not available." ;
    schema:domainIncludes schema:OfferShippingDetails,
        schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:domainIncludes a rdf:Property ;
    rdfs:label "domainIncludes" ;
    rdfs:comment "Relates a property to a class that is (one of) the type(s) the property is expected to be used on." ;
    schema:domainIncludes schema:Property ;
    schema:isPartOf <https://meta.schema.org> ;
    schema:rangeIncludes schema:Class .

schema:domiciledMortgage a rdf:Property ;
    rdfs:label "domiciledMortgage" ;
    rdfs:comment "Whether borrower is a resident of the jurisdiction where the property is located." ;
    schema:domainIncludes schema:MortgageLoan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:doorTime a rdf:Property ;
    rdfs:label "doorTime" ;
    rdfs:comment "The time admission will commence." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:DateTime,
        schema:Time .

schema:dosageForm a rdf:Property ;
    rdfs:label "dosageForm" ;
    rdfs:comment "A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:doseSchedule a rdf:Property ;
    rdfs:label "doseSchedule" ;
    rdfs:comment "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used." ;
    schema:domainIncludes schema:Drug,
        schema:TherapeuticProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DoseSchedule .

schema:doseUnit a rdf:Property ;
    rdfs:label "doseUnit" ;
    rdfs:comment "The unit of the dose, e.g. 'mg'." ;
    schema:domainIncludes schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:doseValue a rdf:Property ;
    rdfs:label "doseValue" ;
    rdfs:comment "The value of the dose, e.g. 500." ;
    schema:domainIncludes schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QualitativeValue .

schema:downPayment a rdf:Property ;
    rdfs:label "downPayment" ;
    rdfs:comment "a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price." ;
    schema:domainIncludes schema:RepaymentSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:downloadUrl a rdf:Property ;
    rdfs:label "downloadUrl" ;
    rdfs:comment "If the file can be downloaded, URL to download the binary." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:URL .

schema:downvoteCount a rdf:Property ;
    rdfs:label "downvoteCount" ;
    rdfs:comment "The number of downvotes this question, answer or comment has received from the community." ;
    schema:domainIncludes schema:Comment ;
    schema:rangeIncludes schema:Integer .

schema:drainsTo a rdf:Property ;
    rdfs:label "drainsTo" ;
    rdfs:comment "The vasculature that the vein drains into." ;
    schema:domainIncludes schema:Vein ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Vessel .

schema:driveWheelConfiguration a rdf:Property ;
    rdfs:label "driveWheelConfiguration" ;
    rdfs:comment "The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:DriveWheelConfigurationValue,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:dropoffLocation a rdf:Property ;
    rdfs:label "dropoffLocation" ;
    rdfs:comment "Where a rental car can be dropped off." ;
    schema:domainIncludes schema:RentalCarReservation ;
    schema:rangeIncludes schema:Place .

schema:dropoffTime a rdf:Property ;
    rdfs:label "dropoffTime" ;
    rdfs:comment "When a rental car can be dropped off." ;
    schema:domainIncludes schema:RentalCarReservation ;
    schema:rangeIncludes schema:DateTime .

schema:drug a rdf:Property ;
    rdfs:label "drug" ;
    rdfs:comment "Specifying a drug or medicine used in a medication procedure." ;
    schema:domainIncludes schema:DrugClass,
        schema:MedicalCondition,
        schema:Patient,
        schema:TherapeuticProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Drug .

schema:drugClass a rdf:Property ;
    rdfs:label "drugClass" ;
    rdfs:comment "The class of drug this belongs to (e.g., statins)." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugClass .

schema:drugUnit a rdf:Property ;
    rdfs:label "drugUnit" ;
    rdfs:comment "The unit in which the drug is measured, e.g. '5 mg tablet'." ;
    schema:domainIncludes schema:Drug,
        schema:DrugCost ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:duns a rdf:Property ;
    rdfs:label "duns" ;
    rdfs:comment "The Dun & Bradstreet DUNS number for identifying an organization or business person." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:duplicateTherapy a rdf:Property ;
    rdfs:label "duplicateTherapy" ;
    rdfs:comment "A therapy that duplicates or overlaps this one." ;
    schema:domainIncludes schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTherapy .

schema:durationOfWarranty a rdf:Property ;
    rdfs:label "durationOfWarranty" ;
    rdfs:comment "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days." ;
    schema:domainIncludes schema:WarrantyPromise ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:duringMedia a rdf:Property ;
    rdfs:label "duringMedia" ;
    rdfs:comment "A media object representing the circumstances while performing this direction." ;
    schema:domainIncludes schema:HowToDirection ;
    schema:rangeIncludes schema:MediaObject,
        schema:URL .

schema:earlyPrepaymentPenalty a rdf:Property ;
    rdfs:label "earlyPrepaymentPenalty" ;
    rdfs:comment "The amount to be paid as a penalty in the event of early payment of the loan." ;
    schema:domainIncludes schema:RepaymentSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:editEIDR a rdf:Property ;
    rdfs:label "editEIDR" ;
    rdfs:comment """An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.

For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".

Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
""" ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2469> .

schema:editor a rdf:Property ;
    rdfs:label "editor" ;
    rdfs:comment "Specifies the Person who edited the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Person .

schema:eduQuestionType a rdf:Property ;
    rdfs:label "eduQuestionType" ;
    rdfs:comment "For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: \\"Multiple choice\\", \\"Open ended\\", \\"Flashcard\\"." ;
    schema:domainIncludes schema:Question,
        schema:SolveMathAction ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2636> .

schema:educationRequirements a rdf:Property ;
    rdfs:label "educationRequirements" ;
    rdfs:comment "Educational background needed for the position or Occupation." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EducationalOccupationalCredential,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698>,
        <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:educationalAlignment a rdf:Property ;
    rdfs:label "educationalAlignment" ;
    rdfs:comment """An alignment to an established educational framework.

This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.""" ;
    schema:domainIncludes schema:CreativeWork,
        schema:LearningResource ;
    schema:rangeIncludes schema:AlignmentObject .

schema:educationalCredentialAwarded a rdf:Property ;
    rdfs:label "educationalCredentialAwarded" ;
    rdfs:comment "A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program." ;
    schema:domainIncludes schema:Course,
        schema:EducationalOccupationalProgram ;
    schema:rangeIncludes schema:EducationalOccupationalCredential,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:educationalFramework a rdf:Property ;
    rdfs:label "educationalFramework" ;
    rdfs:comment "The framework to which the resource being described is aligned." ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text .

schema:educationalLevel a rdf:Property ;
    rdfs:label "educationalLevel" ;
    rdfs:comment "The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators." ;
    schema:domainIncludes schema:CreativeWork,
        schema:EducationEvent,
        schema:EducationalOccupationalCredential,
        schema:LearningResource ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:educationalProgramMode a rdf:Property ;
    rdfs:label "educationalProgramMode" ;
    rdfs:comment "Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. \\"online\\", \\"onsite\\" or \\"blended\\"; \\"synchronous\\" or \\"asynchronous\\"; \\"full-time\\" or \\"part-time\\") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous )." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:educationalRole a rdf:Property ;
    rdfs:label "educationalRole" ;
    rdfs:comment "An educationalRole of an EducationalAudience." ;
    schema:domainIncludes schema:EducationalAudience ;
    schema:rangeIncludes schema:Text .

schema:educationalUse a rdf:Property ;
    rdfs:label "educationalUse" ;
    rdfs:comment "The purpose of a work in the context of education; for example, 'assignment', 'group work'." ;
    schema:domainIncludes schema:CreativeWork,
        schema:LearningResource ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text .

schema:elevation a rdf:Property ;
    rdfs:label "elevation" ;
    rdfs:comment "The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters." ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:GeoShape ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:eligibilityToWorkRequirement a rdf:Property ;
    rdfs:label "eligibilityToWorkRequirement" ;
    rdfs:comment "The legal requirements such as citizenship, visa and other documentation required for an applicant to this job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2384> .

schema:eligibleCustomerType a rdf:Property ;
    rdfs:label "eligibleCustomerType" ;
    rdfs:comment "The type(s) of customers for which the given offer is valid." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:BusinessEntityType ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:eligibleDuration a rdf:Property ;
    rdfs:label "eligibleDuration" ;
    rdfs:comment "The duration for which the given offer is valid." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:eligibleQuantity a rdf:Property ;
    rdfs:label "eligibleQuantity" ;
    rdfs:comment "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:eligibleRegion a rdf:Property ;
    rdfs:label "eligibleRegion" ;
    rdfs:comment """The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\\\\n\\\\nSee also [[ineligibleRegion]].
    """ ;
    rdfs:subPropertyOf schema:areaServed ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:GeoShape,
        schema:Place,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms>,
        <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:eligibleTransactionVolume a rdf:Property ;
    rdfs:label "eligibleTransactionVolume" ;
    rdfs:comment "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:email a rdf:Property ;
    rdfs:label "email" ;
    rdfs:comment "Email address." ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text .

schema:embedUrl a rdf:Property ;
    rdfs:label "embedUrl" ;
    rdfs:comment "A URL pointing to a player for a specific video. In general, this is the information in the \`\`\`src\`\`\` element of an \`\`\`embed\`\`\` tag and should not be the same as the content of the \`\`\`loc\`\`\` tag." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:URL .

schema:emissionsCO2 a rdf:Property ;
    rdfs:label "emissionsCO2" ;
    rdfs:comment "The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put \\"g/km\\" into the unitText property of that value, since there is no UN/CEFACT Common Code for \\"g/km\\"." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:employees a rdf:Property ;
    rdfs:label "employees" ;
    rdfs:comment "People working for this organization." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:employee .

schema:employerOverview a rdf:Property ;
    rdfs:label "employerOverview" ;
    rdfs:comment "A description of the employer, career opportunities and work environment for this position." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2396> .

schema:employmentType a rdf:Property ;
    rdfs:label "employmentType" ;
    rdfs:comment "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship)." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:employmentUnit a rdf:Property ;
    rdfs:label "employmentUnit" ;
    rdfs:comment "Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2296> .

schema:encodingType a rdf:Property ;
    rdfs:label "encodingType" ;
    rdfs:comment "The supported encoding type(s) for an EntryPoint request." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text .

schema:encodings a rdf:Property ;
    rdfs:label "encodings" ;
    rdfs:comment "A media object that encodes this CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:MediaObject ;
    schema:supersededBy schema:encoding .

schema:endDate a rdf:Property ;
    rdfs:label "endDate" ;
    rdfs:comment "The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601))." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:CreativeWorkSeries,
        schema:DatedMoneySpecification,
        schema:EducationalOccupationalProgram,
        schema:Event,
        schema:Role,
        schema:Schedule ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2486> .

schema:endOffset a rdf:Property ;
    rdfs:label "endOffset" ;
    rdfs:comment "The end time of the clip expressed as the number of seconds from the beginning of the work." ;
    schema:domainIncludes schema:Clip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HyperTocEntry,
        schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2021> .

schema:endTime a rdf:Property ;
    rdfs:label "endTime" ;
    rdfs:comment "The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\\\\n\\\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions." ;
    schema:domainIncludes schema:Action,
        schema:FoodEstablishmentReservation,
        schema:MediaObject,
        schema:Schedule ;
    schema:rangeIncludes schema:DateTime,
        schema:Time ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2493> .

schema:endorsee a rdf:Property ;
    rdfs:label "endorsee" ;
    rdfs:comment "A sub property of participant. The person/organization being supported." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:EndorseAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:endorsers a rdf:Property ;
    rdfs:label "endorsers" ;
    rdfs:comment "People or organizations that endorse the plan." ;
    schema:domainIncludes schema:Diet ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:energyEfficiencyScaleMax a rdf:Property ;
    rdfs:label "energyEfficiencyScaleMax" ;
    rdfs:comment "Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++." ;
    schema:domainIncludes schema:EnergyConsumptionDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EUEnergyEfficiencyEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:energyEfficiencyScaleMin a rdf:Property ;
    rdfs:label "energyEfficiencyScaleMin" ;
    rdfs:comment "Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++." ;
    schema:domainIncludes schema:EnergyConsumptionDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EUEnergyEfficiencyEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:engineDisplacement a rdf:Property ;
    rdfs:label "engineDisplacement" ;
    rdfs:comment "The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \\\\n\\\\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\\\\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\\\\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:EngineSpecification ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:enginePower a rdf:Property ;
    rdfs:label "enginePower" ;
    rdfs:comment """The power of the vehicle's engine.
    Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\\\\n\\\\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see  [http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\\\\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\\\\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.""" ;
    schema:domainIncludes schema:EngineSpecification ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:engineType a rdf:Property ;
    rdfs:label "engineType" ;
    rdfs:comment "The type of engine or engines powering the vehicle." ;
    schema:domainIncludes schema:EngineSpecification ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:entertainmentBusiness a rdf:Property ;
    rdfs:label "entertainmentBusiness" ;
    rdfs:comment "A sub property of location. The entertainment business where the action occurred." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:PerformAction ;
    schema:rangeIncludes schema:EntertainmentBusiness .

schema:epidemiology a rdf:Property ;
    rdfs:label "epidemiology" ;
    rdfs:comment "The characteristics of associated patients, such as age, gender, race etc." ;
    schema:domainIncludes schema:MedicalCondition,
        schema:PhysicalActivity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:episodeNumber a rdf:Property ;
    rdfs:label "episodeNumber" ;
    rdfs:comment "Position of the episode within an ordered group of episodes." ;
    rdfs:subPropertyOf schema:position ;
    schema:domainIncludes schema:Episode ;
    schema:rangeIncludes schema:Integer,
        schema:Text .

schema:episodes a rdf:Property ;
    rdfs:label "episodes" ;
    rdfs:comment "An episode of a TV/radio series or season." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Episode ;
    schema:supersededBy schema:episode .

schema:equal a rdf:Property ;
    rdfs:label "equal" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is equal to the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:error a rdf:Property ;
    rdfs:label "error" ;
    rdfs:comment "For failed actions, more information on the cause of the failure." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing .

schema:estimatedCost a rdf:Property ;
    rdfs:label "estimatedCost" ;
    rdfs:comment "The estimated cost of the supply or supplies consumed when performing instructions." ;
    schema:domainIncludes schema:HowTo,
        schema:HowToSupply ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Text .

schema:estimatedFlightDuration a rdf:Property ;
    rdfs:label "estimatedFlightDuration" ;
    rdfs:comment "The estimated time the flight will take." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Duration,
        schema:Text .

schema:estimatedSalary a rdf:Property ;
    rdfs:label "estimatedSalary" ;
    rdfs:comment "An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:MonetaryAmountDistribution,
        schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:estimatesRiskOf a rdf:Property ;
    rdfs:label "estimatesRiskOf" ;
    rdfs:comment "The condition, complication, or symptom whose risk is being estimated." ;
    schema:domainIncludes schema:MedicalRiskEstimator ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:ethicsPolicy a rdf:Property ;
    rdfs:label "ethicsPolicy" ;
    rdfs:comment "Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization." ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525> .

schema:eventAttendanceMode a rdf:Property ;
    rdfs:label "eventAttendanceMode" ;
    rdfs:comment "The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix." ;
    schema:domainIncludes schema:Event ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EventAttendanceModeEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:eventSchedule a rdf:Property ;
    rdfs:label "eventSchedule" ;
    rdfs:comment """Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
      repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
      gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
      is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
      [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
      or seasons.""" ;
    schema:domainIncludes schema:Event ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Schedule ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:eventStatus a rdf:Property ;
    rdfs:label "eventStatus" ;
    rdfs:comment "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:EventStatusType .

schema:events a rdf:Property ;
    rdfs:label "events" ;
    rdfs:comment "Upcoming or past events associated with this place or organization." ;
    schema:domainIncludes schema:Organization,
        schema:Place ;
    schema:rangeIncludes schema:Event ;
    schema:supersededBy schema:event .

schema:evidenceLevel a rdf:Property ;
    rdfs:label "evidenceLevel" ;
    rdfs:comment "Strength of evidence of the data used to formulate the guideline (enumerated)." ;
    schema:domainIncludes schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEvidenceLevel .

schema:evidenceOrigin a rdf:Property ;
    rdfs:label "evidenceOrigin" ;
    rdfs:comment "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc." ;
    schema:domainIncludes schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:exceptDate a rdf:Property ;
    rdfs:label "exceptDate" ;
    rdfs:comment """Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to
      a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time
      should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be
      excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.""" ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:exchangeRateSpread a rdf:Property ;
    rdfs:label "exchangeRateSpread" ;
    rdfs:comment "The difference between the price at which a broker or other intermediary buys and sells foreign currency." ;
    schema:domainIncludes schema:ExchangeRateSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:exercisePlan a rdf:Property ;
    rdfs:label "exercisePlan" ;
    rdfs:comment "A sub property of instrument. The exercise plan used on this action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:ExercisePlan .

schema:exerciseRelatedDiet a rdf:Property ;
    rdfs:label "exerciseRelatedDiet" ;
    rdfs:comment "A sub property of instrument. The diet used in this action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Diet .

schema:exerciseType a rdf:Property ;
    rdfs:label "exerciseType" ;
    rdfs:comment "Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc." ;
    schema:domainIncludes schema:ExerciseAction,
        schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:exifData a rdf:Property ;
    rdfs:label "exifData" ;
    rdfs:comment "exif data for this object." ;
    schema:domainIncludes schema:ImageObject ;
    schema:rangeIncludes schema:PropertyValue,
        schema:Text .

schema:expectedArrivalFrom a rdf:Property ;
    rdfs:label "expectedArrivalFrom" ;
    rdfs:comment "The earliest date the package may arrive." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:expectedArrivalUntil a rdf:Property ;
    rdfs:label "expectedArrivalUntil" ;
    rdfs:comment "The latest date the package may arrive." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:expectedPrognosis a rdf:Property ;
    rdfs:label "expectedPrognosis" ;
    rdfs:comment "The likely outcome in either the short term or long term of the medical condition." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:expectsAcceptanceOf a rdf:Property ;
    rdfs:label "expectsAcceptanceOf" ;
    rdfs:comment "An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it." ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:ConsumeAction,
        schema:MediaSubscription ;
    schema:rangeIncludes schema:Offer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:experienceInPlaceOfEducation a rdf:Property ;
    rdfs:label "experienceInPlaceOfEducation" ;
    rdfs:comment "Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2681> .

schema:experienceRequirements a rdf:Property ;
    rdfs:label "experienceRequirements" ;
    rdfs:comment "Description of skills and experience needed for the position or Occupation." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:OccupationalExperienceRequirements,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:expertConsiderations a rdf:Property ;
    rdfs:label "expertConsiderations" ;
    rdfs:comment "Medical expert advice related to the plan." ;
    schema:domainIncludes schema:Diet ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:expires a rdf:Property ;
    rdfs:label "expires" ;
    rdfs:comment "Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Date .

schema:familyName a rdf:Property ;
    rdfs:label "familyName" ;
    rdfs:comment "Family name. In the U.S., the last name of a Person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text .

schema:fatContent a rdf:Property ;
    rdfs:label "fatContent" ;
    rdfs:comment "The number of grams of fat." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:faxNumber a rdf:Property ;
    rdfs:label "faxNumber" ;
    rdfs:comment "The fax number." ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text .

schema:featureList a rdf:Property ;
    rdfs:label "featureList" ;
    rdfs:comment "Features or modules provided by this application (and possibly required by other applications)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:feesAndCommissionsSpecification a rdf:Property ;
    rdfs:label "feesAndCommissionsSpecification" ;
    rdfs:comment "Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization." ;
    schema:domainIncludes schema:FinancialProduct,
        schema:FinancialService ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:fiberContent a rdf:Property ;
    rdfs:label "fiberContent" ;
    rdfs:comment "The number of grams of fiber." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:fileFormat a rdf:Property ;
    rdfs:label "fileFormat" ;
    rdfs:comment "Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:encodingFormat .

schema:fileSize a rdf:Property ;
    rdfs:label "fileSize" ;
    rdfs:comment "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:financialAidEligible a rdf:Property ;
    rdfs:label "financialAidEligible" ;
    rdfs:comment "A financial aid type or program which students may use to pay for tuition or fees associated with the program." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2418> .

schema:firstAppearance a rdf:Property ;
    rdfs:label "firstAppearance" ;
    rdfs:comment "Indicates the first known occurence of a [[Claim]] in some [[CreativeWork]]." ;
    rdfs:subPropertyOf schema:workExample ;
    schema:domainIncludes schema:Claim ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1828> .

schema:firstPerformance a rdf:Property ;
    rdfs:label "firstPerformance" ;
    rdfs:comment "The date and place the work was first performed." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Event ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:flightDistance a rdf:Property ;
    rdfs:label "flightDistance" ;
    rdfs:comment "The distance of the flight." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Distance,
        schema:Text .

schema:flightNumber a rdf:Property ;
    rdfs:label "flightNumber" ;
    rdfs:comment "The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:floorLevel a rdf:Property ;
    rdfs:label "floorLevel" ;
    rdfs:comment """The floor level for an [[Accommodation]] in a multi-storey building. Since counting
  systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.""" ;
    schema:domainIncludes schema:Accommodation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:floorLimit a rdf:Property ;
    rdfs:label "floorLimit" ;
    rdfs:comment "A floor limit is the amount of money above which credit card transactions must be authorized." ;
    schema:domainIncludes schema:PaymentCard ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:floorSize a rdf:Property ;
    rdfs:label "floorSize" ;
    rdfs:comment """The size of the accommodation, e.g. in square meter or squarefoot.
Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard """ ;
    schema:domainIncludes schema:Accommodation,
        schema:FloorPlan ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:followee a rdf:Property ;
    rdfs:label "followee" ;
    rdfs:comment "A sub property of object. The person or organization being followed." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:FollowAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:follows a rdf:Property ;
    rdfs:label "follows" ;
    rdfs:comment "The most generic uni-directional social relation." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:followup a rdf:Property ;
    rdfs:label "followup" ;
    rdfs:comment "Typical or recommended followup care after the procedure is performed." ;
    schema:domainIncludes schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:foodEstablishment a rdf:Property ;
    rdfs:label "foodEstablishment" ;
    rdfs:comment "A sub property of location. The specific food establishment where the action occurred." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:FoodEstablishment,
        schema:Place .

schema:foodEvent a rdf:Property ;
    rdfs:label "foodEvent" ;
    rdfs:comment "A sub property of location. The specific food event where the action occurred." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:FoodEvent .

schema:foodWarning a rdf:Property ;
    rdfs:label "foodWarning" ;
    rdfs:comment "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:founders a rdf:Property ;
    rdfs:label "founders" ;
    rdfs:comment "A person who founded this organization." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:founder .

schema:foundingDate a rdf:Property ;
    rdfs:label "foundingDate" ;
    rdfs:comment "The date that this organization was founded." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Date .

schema:foundingLocation a rdf:Property ;
    rdfs:label "foundingLocation" ;
    rdfs:comment "The place where the Organization was founded." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Place .

schema:free a rdf:Property ;
    rdfs:label "free" ;
    rdfs:comment "A flag to signal that the item, event, or place is accessible for free." ;
    schema:domainIncludes schema:PublicationEvent ;
    schema:rangeIncludes schema:Boolean ;
    schema:supersededBy schema:isAccessibleForFree .

schema:freeShippingThreshold a rdf:Property ;
    rdfs:label "freeShippingThreshold" ;
    rdfs:comment "A monetary value above which (or equal to) the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]]." ;
    schema:domainIncludes schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DeliveryChargeSpecification,
        schema:MonetaryAmount ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:fromLocation a rdf:Property ;
    rdfs:label "fromLocation" ;
    rdfs:comment "A sub property of location. The original location of the object or the agent before the action." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction,
        schema:MoveAction,
        schema:TransferAction ;
    schema:rangeIncludes schema:Place .

schema:fuelCapacity a rdf:Property ;
    rdfs:label "fuelCapacity" ;
    rdfs:comment "The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\\\\n\\\\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:fuelConsumption a rdf:Property ;
    rdfs:label "fuelConsumption" ;
    rdfs:comment "The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\\\\n\\\\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\\\\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\\\\n* Note 3: Often, the absolute value is useful only when related to driving speed (\\"at 80 km/h\\") or usage pattern (\\"city traffic\\"). You can use [[valueReference]] to link the value for the fuel consumption to another value." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:fuelEfficiency a rdf:Property ;
    rdfs:label "fuelEfficiency" ;
    rdfs:comment "The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\\\\n\\\\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\\\\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\\\\n* Note 3: Often, the absolute value is useful only when related to driving speed (\\"at 80 km/h\\") or usage pattern (\\"city traffic\\"). You can use [[valueReference]] to link the value for the fuel economy to another value." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:fuelType a rdf:Property ;
    rdfs:label "fuelType" ;
    rdfs:comment "The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle." ;
    schema:domainIncludes schema:EngineSpecification,
        schema:Vehicle ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:functionalClass a rdf:Property ;
    rdfs:label "functionalClass" ;
    rdfs:comment "The degree of mobility the joint allows." ;
    schema:domainIncludes schema:Joint ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity,
        schema:Text .

schema:fundedItem a rdf:Property ;
    rdfs:label "fundedItem" ;
    rdfs:comment "Indicates an item funded or sponsored through a [[Grant]]." ;
    schema:domainIncludes schema:Grant ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Thing ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1950>,
        <https://github.com/schemaorg/schemaorg/issues/383>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:funder a rdf:Property ;
    rdfs:label "funder" ;
    rdfs:comment "A person or organization that supports (sponsors) something through some kind of financial contribution." ;
    rdfs:subPropertyOf schema:sponsor ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:MonetaryGrant,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:gameItem a rdf:Property ;
    rdfs:label "gameItem" ;
    rdfs:comment "An item is an object within the game world that can be collected by a player or, occasionally, a non-player character." ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing .

schema:gameLocation a rdf:Property ;
    rdfs:label "gameLocation" ;
    rdfs:comment "Real or fictional location of the game (or part of game)." ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Place,
        schema:PostalAddress,
        schema:URL .

schema:gamePlatform a rdf:Property ;
    rdfs:label "gamePlatform" ;
    rdfs:comment "The electronic systems used to play <a href=\\"http://en.wikipedia.org/wiki/Category:Video_game_platforms\\">video games</a>." ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Text,
        schema:Thing,
        schema:URL .

schema:gameTip a rdf:Property ;
    rdfs:label "gameTip" ;
    rdfs:comment "Links to tips, tactics, etc." ;
    schema:domainIncludes schema:VideoGame ;
    schema:rangeIncludes schema:CreativeWork .

schema:gender a rdf:Property ;
    rdfs:label "gender" ;
    rdfs:comment "Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of \\"Mixed\\"." ;
    schema:domainIncludes schema:Person,
        schema:SportsTeam ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:GenderType,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2341> .

schema:geo a rdf:Property ;
    rdfs:label "geo" ;
    rdfs:comment "The geo coordinates of the place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:GeoCoordinates,
        schema:GeoShape .

schema:geoContains a rdf:Property ;
    rdfs:label "geoContains" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \\"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoCoveredBy a rdf:Property ;
    rdfs:label "geoCoveredBy" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoCovers a rdf:Property ;
    rdfs:label "geoCovers" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \\"Every point of b is a point of (the interior or boundary of) a\\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoCrosses a rdf:Property ;
    rdfs:label "geoCrosses" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: \\"a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them\\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoDisjoint a rdf:Property ;
    rdfs:label "geoDisjoint" ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries.\\" (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoEquals a rdf:Property ;
    rdfs:label "geoEquals" ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). \\"Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other\\" (a symmetric relationship)" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoIntersects a rdf:Property ;
    rdfs:label "geoIntersects" ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoMidpoint a rdf:Property ;
    rdfs:label "geoMidpoint" ;
    rdfs:comment "Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle." ;
    schema:domainIncludes schema:GeoCircle ;
    schema:rangeIncludes schema:GeoCoordinates .

schema:geoOverlaps a rdf:Property ;
    rdfs:label "geoOverlaps" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoRadius a rdf:Property ;
    rdfs:label "geoRadius" ;
    rdfs:comment "Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation)." ;
    schema:domainIncludes schema:GeoCircle ;
    schema:rangeIncludes schema:Distance,
        schema:Number,
        schema:Text .

schema:geoTouches a rdf:Property ;
    rdfs:label "geoTouches" ;
    rdfs:comment "Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points.\\" (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )" ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geoWithin a rdf:Property ;
    rdfs:label "geoWithin" ;
    rdfs:comment "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM)." ;
    schema:domainIncludes schema:GeospatialGeometry,
        schema:Place ;
    schema:rangeIncludes schema:GeospatialGeometry,
        schema:Place .

schema:geographicArea a rdf:Property ;
    rdfs:label "geographicArea" ;
    rdfs:comment "The geographic area associated with the audience." ;
    schema:domainIncludes schema:Audience ;
    schema:rangeIncludes schema:AdministrativeArea .

schema:gettingTestedInfo a rdf:Property ;
    rdfs:label "gettingTestedInfo" ;
    rdfs:comment "Information about getting tested (for a [[MedicalCondition]]), e.g. in the context of a pandemic." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:givenName a rdf:Property ;
    rdfs:label "givenName" ;
    rdfs:comment "Given name. In the U.S., the first name of a Person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text .

schema:globalLocationNumber a rdf:Property ;
    rdfs:label "globalLocationNumber" ;
    rdfs:comment "The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:governmentBenefitsInfo a rdf:Property ;
    rdfs:label "governmentBenefitsInfo" ;
    rdfs:comment "governmentBenefitsInfo provides information about government benefits associated with a SpecialAnnouncement." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:GovernmentService ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:gracePeriod a rdf:Property ;
    rdfs:label "gracePeriod" ;
    rdfs:comment "The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred." ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:grantee a rdf:Property ;
    rdfs:label "grantee" ;
    rdfs:comment "The person, organization, contact point, or audience that has been granted this permission." ;
    schema:domainIncludes schema:DigitalDocumentPermission ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person .

schema:greater a rdf:Property ;
    rdfs:label "greater" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is greater than the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:greaterOrEqual a rdf:Property ;
    rdfs:label "greaterOrEqual" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:gtin12 a rdf:Property ;
    rdfs:label "gtin12" ;
    rdfs:comment "The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details." ;
    rdfs:subPropertyOf schema:gtin,
        schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text .

schema:gtin13 a rdf:Property ;
    rdfs:label "gtin13" ;
    rdfs:comment "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details." ;
    rdfs:subPropertyOf schema:gtin,
        schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:gtin14 a rdf:Property ;
    rdfs:label "gtin14" ;
    rdfs:comment "The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details." ;
    rdfs:subPropertyOf schema:gtin,
        schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:gtin8 a rdf:Property ;
    rdfs:label "gtin8" ;
    rdfs:comment "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details." ;
    rdfs:subPropertyOf schema:gtin,
        schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:guideline a rdf:Property ;
    rdfs:label "guideline" ;
    rdfs:comment "A medical guideline related to this entity." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalGuideline .

schema:guidelineDate a rdf:Property ;
    rdfs:label "guidelineDate" ;
    rdfs:comment "Date on which this guideline's recommendation was made." ;
    schema:domainIncludes schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Date .

schema:guidelineSubject a rdf:Property ;
    rdfs:label "guidelineSubject" ;
    rdfs:comment "The medical conditions, treatments, etc. that are the subject of the guideline." ;
    schema:domainIncludes schema:MedicalGuideline ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:handlingTime a rdf:Property ;
    rdfs:label "handlingTime" ;
    rdfs:comment "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY).  This is by common convention assumed to mean business days (if a unitCode is used, coded as \\"d\\"), i.e. only counting days when the business normally operates." ;
    schema:domainIncludes schema:ShippingDeliveryTime ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:hasCategoryCode a rdf:Property ;
    rdfs:label "hasCategoryCode" ;
    rdfs:comment "A Category code contained in this code set." ;
    rdfs:subPropertyOf schema:hasDefinedTerm ;
    schema:domainIncludes schema:CategoryCodeSet ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CategoryCode ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:hasCourse a rdf:Property ;
    rdfs:label "hasCourse" ;
    rdfs:comment "A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Course ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2483> .

schema:hasCourseInstance a rdf:Property ;
    rdfs:label "hasCourseInstance" ;
    rdfs:comment "An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students." ;
    schema:domainIncludes schema:Course ;
    schema:rangeIncludes schema:CourseInstance .

schema:hasCredential a rdf:Property ;
    rdfs:label "hasCredential" ;
    rdfs:comment "A credential awarded to the Person or Organization." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EducationalOccupationalCredential ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:hasDeliveryMethod a rdf:Property ;
    rdfs:label "hasDeliveryMethod" ;
    rdfs:comment "Method used for delivery or shipping." ;
    schema:domainIncludes schema:DeliveryEvent,
        schema:ParcelDelivery ;
    schema:rangeIncludes schema:DeliveryMethod .

schema:hasDigitalDocumentPermission a rdf:Property ;
    rdfs:label "hasDigitalDocumentPermission" ;
    rdfs:comment "A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to \\"public\\"." ;
    schema:domainIncludes schema:DigitalDocument ;
    schema:rangeIncludes schema:DigitalDocumentPermission .

schema:hasDriveThroughService a rdf:Property ;
    rdfs:label "hasDriveThroughService" ;
    rdfs:comment "Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users." ;
    schema:domainIncludes schema:Place ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:hasEnergyConsumptionDetails a rdf:Property ;
    rdfs:label "hasEnergyConsumptionDetails" ;
    rdfs:comment "Defines the energy efficiency Category (also known as \\"class\\" or \\"rating\\") for a product according to an international energy efficiency standard." ;
    schema:domainIncludes schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EnergyConsumptionDetails ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:hasEnergyEfficiencyCategory a rdf:Property ;
    rdfs:label "hasEnergyEfficiencyCategory" ;
    rdfs:comment "Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard." ;
    schema:domainIncludes schema:EnergyConsumptionDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EnergyEfficiencyEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2670> .

schema:hasHealthAspect a rdf:Property ;
    rdfs:label "hasHealthAspect" ;
    rdfs:comment "Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects." ;
    schema:domainIncludes schema:HealthTopicContent ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HealthAspectEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:hasMeasurement a rdf:Property ;
    rdfs:label "hasMeasurement" ;
    rdfs:comment "A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings." ;
    schema:domainIncludes schema:Offer,
        schema:Product,
        schema:SizeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:hasMenuItem a rdf:Property ;
    rdfs:label "hasMenuItem" ;
    rdfs:comment "A food or drink item contained in a menu or menu section." ;
    schema:domainIncludes schema:Menu,
        schema:MenuSection ;
    schema:rangeIncludes schema:MenuItem .

schema:hasMenuSection a rdf:Property ;
    rdfs:label "hasMenuSection" ;
    rdfs:comment "A subgrouping of the menu (by dishes, course, serving time period, etc.)." ;
    schema:domainIncludes schema:Menu,
        schema:MenuSection ;
    schema:rangeIncludes schema:MenuSection .

schema:hasMerchantReturnPolicy a rdf:Property ;
    rdfs:label "hasMerchantReturnPolicy" ;
    rdfs:comment "Indicates a MerchantReturnPolicy that may be applicable." ;
    schema:domainIncludes schema:Organization,
        schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MerchantReturnPolicy ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:hasOccupation a rdf:Property ;
    rdfs:label "hasOccupation" ;
    rdfs:comment "The Person's occupation. For past professions, use Role for expressing dates." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Occupation ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:hasOfferCatalog a rdf:Property ;
    rdfs:label "hasOfferCatalog" ;
    rdfs:comment "Indicates an OfferCatalog listing for this Organization, Person, or Service." ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Service ;
    schema:rangeIncludes schema:OfferCatalog .

schema:hasPOS a rdf:Property ;
    rdfs:label "hasPOS" ;
    rdfs:comment "Points-of-Sales operated by the organization or person." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Place ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:headline a rdf:Property ;
    rdfs:label "headline" ;
    rdfs:comment "Headline of the article." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:healthCondition a rdf:Property ;
    rdfs:label "healthCondition" ;
    rdfs:comment "Specifying the health condition(s) of a patient, medical study, or other target audience." ;
    schema:domainIncludes schema:MedicalStudy,
        schema:Patient,
        schema:PeopleAudience ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalCondition .

schema:healthPlanCoinsuranceOption a rdf:Property ;
    rdfs:label "healthPlanCoinsuranceOption" ;
    rdfs:comment "Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?" ;
    schema:domainIncludes schema:HealthPlanCostSharingSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanCoinsuranceRate a rdf:Property ;
    rdfs:label "healthPlanCoinsuranceRate" ;
    rdfs:comment "Whether The rate of coinsurance expressed as a number between 0.0 and 1.0." ;
    schema:domainIncludes schema:HealthPlanCostSharingSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanCopay a rdf:Property ;
    rdfs:label "healthPlanCopay" ;
    rdfs:comment "Whether The copay amount." ;
    schema:domainIncludes schema:HealthPlanCostSharingSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:PriceSpecification ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanCopayOption a rdf:Property ;
    rdfs:label "healthPlanCopayOption" ;
    rdfs:comment "Whether the copay is before or after deductible, etc. TODO: Is this a closed set?" ;
    schema:domainIncludes schema:HealthPlanCostSharingSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanCostSharing a rdf:Property ;
    rdfs:label "healthPlanCostSharing" ;
    rdfs:comment "Whether The costs to the patient for services under this network or formulary." ;
    schema:domainIncludes schema:HealthPlanFormulary,
        schema:HealthPlanNetwork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanDrugOption a rdf:Property ;
    rdfs:label "healthPlanDrugOption" ;
    rdfs:comment "TODO." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanDrugTier a rdf:Property ;
    rdfs:label "healthPlanDrugTier" ;
    rdfs:comment "The tier(s) of drugs offered by this formulary or insurance plan." ;
    schema:domainIncludes schema:HealthInsurancePlan,
        schema:HealthPlanFormulary ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanId a rdf:Property ;
    rdfs:label "healthPlanId" ;
    rdfs:comment "The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)" ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanMarketingUrl a rdf:Property ;
    rdfs:label "healthPlanMarketingUrl" ;
    rdfs:comment "The URL that goes directly to the plan brochure for the specific standard plan or plan variation." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanNetworkId a rdf:Property ;
    rdfs:label "healthPlanNetworkId" ;
    rdfs:comment "Name or unique ID of network. (Networks are often reused across different insurance plans)." ;
    schema:domainIncludes schema:HealthPlanNetwork,
        schema:MedicalOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanNetworkTier a rdf:Property ;
    rdfs:label "healthPlanNetworkTier" ;
    rdfs:comment "The tier(s) for this network." ;
    schema:domainIncludes schema:HealthPlanNetwork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthPlanPharmacyCategory a rdf:Property ;
    rdfs:label "healthPlanPharmacyCategory" ;
    rdfs:comment "The category or type of pharmacy associated with this cost sharing." ;
    schema:domainIncludes schema:HealthPlanCostSharingSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:healthcareReportingData a rdf:Property ;
    rdfs:label "healthcareReportingData" ;
    rdfs:comment "Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]]." ;
    schema:domainIncludes schema:Hospital ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CDCPMDRecord,
        schema:Dataset ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2521> .

schema:height a rdf:Property ;
    rdfs:label "height" ;
    rdfs:comment "The height of the item." ;
    schema:domainIncludes schema:MediaObject,
        schema:Person,
        schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue .

schema:highPrice a rdf:Property ;
    rdfs:label "highPrice" ;
    rdfs:comment "The highest price of all offers available.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:hiringOrganization a rdf:Property ;
    rdfs:label "hiringOrganization" ;
    rdfs:comment "Organization offering the job position." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Organization .

schema:homeLocation a rdf:Property ;
    rdfs:label "homeLocation" ;
    rdfs:comment "A contact location for a person's residence." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Place .

schema:homeTeam a rdf:Property ;
    rdfs:label "homeTeam" ;
    rdfs:comment "The home team in a sports event." ;
    rdfs:subPropertyOf schema:competitor ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam .

schema:honorificPrefix a rdf:Property ;
    rdfs:label "honorificPrefix" ;
    rdfs:comment "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text .

schema:honorificSuffix a rdf:Property ;
    rdfs:label "honorificSuffix" ;
    rdfs:comment "An honorific suffix following a Person's name such as M.D. /PhD/MSCSW." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Text .

schema:hospitalAffiliation a rdf:Property ;
    rdfs:label "hospitalAffiliation" ;
    rdfs:comment "A hospital with which the physician or office is affiliated." ;
    schema:domainIncludes schema:Physician ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Hospital .

schema:hostingOrganization a rdf:Property ;
    rdfs:label "hostingOrganization" ;
    rdfs:comment "The organization (airline, travelers' club, etc.) the membership is made with." ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Organization .

schema:hoursAvailable a rdf:Property ;
    rdfs:label "hoursAvailable" ;
    rdfs:comment "The hours during which this service or contact is available." ;
    schema:domainIncludes schema:ContactPoint,
        schema:LocationFeatureSpecification,
        schema:Service ;
    schema:rangeIncludes schema:OpeningHoursSpecification .

schema:howPerformed a rdf:Property ;
    rdfs:label "howPerformed" ;
    rdfs:comment "How the procedure is performed." ;
    schema:domainIncludes schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:httpMethod a rdf:Property ;
    rdfs:label "httpMethod" ;
    rdfs:comment "An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text .

schema:iataCode a rdf:Property ;
    rdfs:label "iataCode" ;
    rdfs:comment "IATA identifier for an airline or airport." ;
    schema:domainIncludes schema:Airline,
        schema:Airport ;
    schema:rangeIncludes schema:Text .

schema:icaoCode a rdf:Property ;
    rdfs:label "icaoCode" ;
    rdfs:comment "ICAO identifier for an airport." ;
    schema:domainIncludes schema:Airport ;
    schema:rangeIncludes schema:Text .

schema:identifyingExam a rdf:Property ;
    rdfs:label "identifyingExam" ;
    rdfs:comment "A physical examination that can identify this sign." ;
    schema:domainIncludes schema:MedicalSign ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:PhysicalExam .

schema:identifyingTest a rdf:Property ;
    rdfs:label "identifyingTest" ;
    rdfs:comment "A diagnostic test that can identify this sign." ;
    schema:domainIncludes schema:MedicalSign ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTest .

schema:illustrator a rdf:Property ;
    rdfs:label "illustrator" ;
    rdfs:comment "The illustrator of the book." ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Person .

schema:imagingTechnique a rdf:Property ;
    rdfs:label "imagingTechnique" ;
    rdfs:comment "Imaging technique used." ;
    schema:domainIncludes schema:ImagingTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalImagingTechnique .

schema:inAlbum a rdf:Property ;
    rdfs:label "inAlbum" ;
    rdfs:comment "The album to which this recording belongs." ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:MusicAlbum .

schema:inBroadcastLineup a rdf:Property ;
    rdfs:label "inBroadcastLineup" ;
    rdfs:comment "The CableOrSatelliteService offering the channel." ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:rangeIncludes schema:CableOrSatelliteService .

schema:inCodeSet a rdf:Property ;
    rdfs:label "inCodeSet" ;
    rdfs:comment "A [[CategoryCodeSet]] that contains this category code." ;
    rdfs:subPropertyOf schema:inDefinedTermSet ;
    schema:domainIncludes schema:CategoryCode ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CategoryCodeSet,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:inPlaylist a rdf:Property ;
    rdfs:label "inPlaylist" ;
    rdfs:comment "The playlist to which this recording belongs." ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:MusicPlaylist .

schema:inProductGroupWithID a rdf:Property ;
    rdfs:label "inProductGroupWithID" ;
    rdfs:comment "Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. " ;
    schema:domainIncludes schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:inStoreReturnsOffered a rdf:Property ;
    rdfs:label "inStoreReturnsOffered" ;
    rdfs:comment "Are in-store returns offered?" ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:inSupportOf a rdf:Property ;
    rdfs:label "inSupportOf" ;
    rdfs:comment "Qualification, candidature, degree, application that Thesis supports." ;
    schema:domainIncludes schema:Thesis ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:incentives a rdf:Property ;
    rdfs:label "incentives" ;
    rdfs:comment "Description of bonus and commission compensation aspects of the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:incentiveCompensation .

schema:includedComposition a rdf:Property ;
    rdfs:label "includedComposition" ;
    rdfs:comment "Smaller compositions included in this work (e.g. a movement in a symphony)." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:MusicComposition ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:includedDataCatalog a rdf:Property ;
    rdfs:label "includedDataCatalog" ;
    rdfs:comment "A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog')." ;
    schema:domainIncludes schema:Dataset ;
    schema:rangeIncludes schema:DataCatalog ;
    schema:supersededBy schema:includedInDataCatalog .

schema:includedInHealthInsurancePlan a rdf:Property ;
    rdfs:label "includedInHealthInsurancePlan" ;
    rdfs:comment "The insurance plans that cover this drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HealthInsurancePlan ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:includedRiskFactor a rdf:Property ;
    rdfs:label "includedRiskFactor" ;
    rdfs:comment "A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition." ;
    schema:domainIncludes schema:MedicalRiskEstimator ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalRiskFactor .

schema:includesAttraction a rdf:Property ;
    rdfs:label "includesAttraction" ;
    rdfs:comment "Attraction located at destination." ;
    schema:domainIncludes schema:TouristDestination ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:TouristAttraction ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:includesHealthPlanFormulary a rdf:Property ;
    rdfs:label "includesHealthPlanFormulary" ;
    rdfs:comment "Formularies covered by this plan." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HealthPlanFormulary ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:includesHealthPlanNetwork a rdf:Property ;
    rdfs:label "includesHealthPlanNetwork" ;
    rdfs:comment "Networks covered by this plan." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HealthPlanNetwork ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:includesObject a rdf:Property ;
    rdfs:label "includesObject" ;
    rdfs:comment "This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]]." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:ProductCollection ;
    schema:rangeIncludes schema:TypeAndQuantityNode ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:increasesRiskOf a rdf:Property ;
    rdfs:label "increasesRiskOf" ;
    rdfs:comment "The condition, complication, etc. influenced by this factor." ;
    schema:domainIncludes schema:MedicalRiskFactor ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:industry a rdf:Property ;
    rdfs:label "industry" ;
    rdfs:comment "The industry associated with the job position." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text .

schema:ineligibleRegion a rdf:Property ;
    rdfs:label "ineligibleRegion" ;
    rdfs:comment """The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\\\\n\\\\nSee also [[eligibleRegion]].
      """ ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:MediaObject,
        schema:Offer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:GeoShape,
        schema:Place,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2242> .

schema:infectiousAgent a rdf:Property ;
    rdfs:label "infectiousAgent" ;
    rdfs:comment "The actual infectious agent, such as a specific bacterium." ;
    schema:domainIncludes schema:InfectiousDisease ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:infectiousAgentClass a rdf:Property ;
    rdfs:label "infectiousAgentClass" ;
    rdfs:comment "The class of infectious agent (bacteria, prion, etc.) that causes the disease." ;
    schema:domainIncludes schema:InfectiousDisease ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:InfectiousAgentClass .

schema:ingredients a rdf:Property ;
    rdfs:label "ingredients" ;
    rdfs:comment "A single ingredient used in the recipe, e.g. sugar, flour or garlic." ;
    rdfs:subPropertyOf schema:supply ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:recipeIngredient .

schema:inker a rdf:Property ;
    rdfs:label "inker" ;
    rdfs:comment "The individual who traces over the pencil drawings in ink after pencils are complete." ;
    schema:domainIncludes schema:ComicIssue,
        schema:ComicStory,
        schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:insertion a rdf:Property ;
    rdfs:label "insertion" ;
    rdfs:comment "The place of attachment of a muscle, or what the muscle moves." ;
    schema:domainIncludes schema:Muscle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:installUrl a rdf:Property ;
    rdfs:label "installUrl" ;
    rdfs:comment "URL at which the app may be installed, if different from the URL of the item." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:URL .

schema:instructor a rdf:Property ;
    rdfs:label "instructor" ;
    rdfs:comment "A person assigned to instruct or provide instructional assistance for the [[CourseInstance]]." ;
    schema:domainIncludes schema:CourseInstance ;
    schema:rangeIncludes schema:Person .

schema:intensity a rdf:Property ;
    rdfs:label "intensity" ;
    rdfs:comment "Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text .

schema:interactingDrug a rdf:Property ;
    rdfs:label "interactingDrug" ;
    rdfs:comment "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Drug .

schema:interactionCount a rdf:Property ;
    rdfs:label "interactionCount" ;
    rdfs:comment "This property is deprecated, alongside the UserInteraction types on which it depended." ;
    schema:supersededBy schema:interactionStatistic .

schema:interactionService a rdf:Property ;
    rdfs:label "interactionService" ;
    rdfs:comment "The WebSite or SoftwareApplication where the interactions took place." ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:SoftwareApplication,
        schema:WebSite .

schema:interactionType a rdf:Property ;
    rdfs:label "interactionType" ;
    rdfs:comment "The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action." ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:Action .

schema:interactivityType a rdf:Property ;
    rdfs:label "interactivityType" ;
    rdfs:comment "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:interestRate a rdf:Property ;
    rdfs:label "interestRate" ;
    rdfs:comment "The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate." ;
    schema:domainIncludes schema:FinancialProduct ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:inventoryLevel a rdf:Property ;
    rdfs:label "inventoryLevel" ;
    rdfs:comment "The current approximate inventory level for the item or items." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:SomeProducts ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:inverseOf a rdf:Property ;
    rdfs:label "inverseOf" ;
    rdfs:comment "Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used." ;
    schema:domainIncludes schema:Property ;
    schema:isPartOf <https://meta.schema.org> ;
    schema:rangeIncludes schema:Property .

schema:isAcceptingNewPatients a rdf:Property ;
    rdfs:label "isAcceptingNewPatients" ;
    rdfs:comment "Whether the provider is accepting new patients." ;
    schema:domainIncludes schema:MedicalOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:isAccessoryOrSparePartFor a rdf:Property ;
    rdfs:label "isAccessoryOrSparePartFor" ;
    rdfs:comment "A pointer to another product (or multiple products) for which this product is an accessory or spare part." ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:isAvailableGenerically a rdf:Property ;
    rdfs:label "isAvailableGenerically" ;
    rdfs:comment "True if the drug is available in a generic form (regardless of name)." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Boolean .

schema:isBasedOnUrl a rdf:Property ;
    rdfs:label "isBasedOnUrl" ;
    rdfs:comment "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Product,
        schema:URL ;
    schema:supersededBy schema:isBasedOn .

schema:isConsumableFor a rdf:Property ;
    rdfs:label "isConsumableFor" ;
    rdfs:comment "A pointer to another product (or multiple products) for which this product is a consumable." ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:isFamilyFriendly a rdf:Property ;
    rdfs:label "isFamilyFriendly" ;
    rdfs:comment "Indicates whether this content is family friendly." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Boolean .

schema:isGift a rdf:Property ;
    rdfs:label "isGift" ;
    rdfs:comment "Was the offer accepted as a gift for someone other than the buyer." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Boolean .

schema:isLiveBroadcast a rdf:Property ;
    rdfs:label "isLiveBroadcast" ;
    rdfs:comment "True if the broadcast is of a live event." ;
    schema:domainIncludes schema:BroadcastEvent ;
    schema:rangeIncludes schema:Boolean .

schema:isPlanForApartment a rdf:Property ;
    rdfs:label "isPlanForApartment" ;
    rdfs:comment "Indicates some accommodation that this floor plan describes." ;
    schema:domainIncludes schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Accommodation ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:isProprietary a rdf:Property ;
    rdfs:label "isProprietary" ;
    rdfs:comment "True if this item's name is a proprietary/brand name (vs. generic name)." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Boolean .

schema:isRelatedTo a rdf:Property ;
    rdfs:label "isRelatedTo" ;
    rdfs:comment "A pointer to another, somehow related product (or multiple products)." ;
    schema:domainIncludes schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:isResizable a rdf:Property ;
    rdfs:label "isResizable" ;
    rdfs:comment "Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality." ;
    schema:domainIncludes schema:3DModel ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2394> .

schema:isSimilarTo a rdf:Property ;
    rdfs:label "isSimilarTo" ;
    rdfs:comment "A pointer to another, functionally similar product (or multiple products)." ;
    schema:domainIncludes schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:isUnlabelledFallback a rdf:Property ;
    rdfs:label "isUnlabelledFallback" ;
    rdfs:comment "This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings." ;
    schema:domainIncludes schema:DeliveryTimeSettings,
        schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:isbn a rdf:Property ;
    rdfs:label "isbn" ;
    rdfs:comment "The ISBN of the book." ;
    rdfs:subPropertyOf schema:identifier ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/isbn> ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Text .

schema:isicV4 a rdf:Property ;
    rdfs:label "isicV4" ;
    rdfs:comment "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place." ;
    schema:domainIncludes schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:isrcCode a rdf:Property ;
    rdfs:label "isrcCode" ;
    rdfs:comment "The International Standard Recording Code for the recording." ;
    schema:domainIncludes schema:MusicRecording ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:issn a rdf:Property ;
    rdfs:label "issn" ;
    rdfs:comment "The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication." ;
    rdfs:subPropertyOf schema:identifier ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/issn> ;
    schema:domainIncludes schema:Blog,
        schema:CreativeWorkSeries,
        schema:Dataset,
        schema:WebSite ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:issueNumber a rdf:Property ;
    rdfs:label "issueNumber" ;
    rdfs:comment "Identifies the issue of publication; for example, \\"iii\\" or \\"2\\"." ;
    rdfs:subPropertyOf schema:position ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/issue> ;
    schema:domainIncludes schema:PublicationIssue ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:issuedBy a rdf:Property ;
    rdfs:label "issuedBy" ;
    rdfs:comment "The organization issuing the ticket or permit." ;
    schema:domainIncludes schema:Permit,
        schema:Ticket ;
    schema:rangeIncludes schema:Organization .

schema:issuedThrough a rdf:Property ;
    rdfs:label "issuedThrough" ;
    rdfs:comment "The service through with the permit was granted." ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Service .

schema:iswcCode a rdf:Property ;
    rdfs:label "iswcCode" ;
    rdfs:comment "The International Standard Musical Work Code for the composition." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:item a rdf:Property ;
    rdfs:label "item" ;
    rdfs:comment "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')â€™." ;
    schema:domainIncludes schema:DataFeedItem,
        schema:ListItem ;
    schema:rangeIncludes schema:Thing .

schema:itemCondition a rdf:Property ;
    rdfs:label "itemCondition" ;
    rdfs:comment "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:OfferItemCondition .

schema:itemListElement a rdf:Property ;
    rdfs:label "itemListElement" ;
    rdfs:comment "For itemListElement values, you can use simple strings (e.g. \\"Peter\\", \\"Paul\\", \\"Mary\\"), existing entities, or use ListItem.\\\\n\\\\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\\\\n\\\\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases." ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:ListItem,
        schema:Text,
        schema:Thing .

schema:itemListOrder a rdf:Property ;
    rdfs:label "itemListOrder" ;
    rdfs:comment "Type of ordering (e.g. Ascending, Descending, Unordered)." ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:ItemListOrderType,
        schema:Text .

schema:itemLocation a rdf:Property ;
    rdfs:label "itemLocation"@en ;
    rdfs:comment "Current location of the item."@en ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ArchiveComponent ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Place,
        schema:PostalAddress,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1758> .

schema:itemReviewed a rdf:Property ;
    rdfs:label "itemReviewed" ;
    rdfs:comment "The item that is being reviewed/rated." ;
    schema:domainIncludes schema:AggregateRating,
        schema:Review ;
    schema:rangeIncludes schema:Thing .

schema:itemShipped a rdf:Property ;
    rdfs:label "itemShipped" ;
    rdfs:comment "Item(s) being shipped." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Product .

schema:itinerary a rdf:Property ;
    rdfs:label "itinerary" ;
    rdfs:comment "Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples)." ;
    schema:domainIncludes schema:Trip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ItemList,
        schema:Place ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:jobImmediateStart a rdf:Property ;
    rdfs:label "jobImmediateStart" ;
    rdfs:comment "An indicator as to whether a position is available for an immediate start." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2244> .

schema:jobLocation a rdf:Property ;
    rdfs:label "jobLocation" ;
    rdfs:comment "A (typically single) geographic location associated with the job position." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Place .

schema:jobLocationType a rdf:Property ;
    rdfs:label "jobLocationType" ;
    rdfs:comment "A description of the job location (e.g TELECOMMUTE for telecommute jobs)." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1591> .

schema:jobStartDate a rdf:Property ;
    rdfs:label "jobStartDate" ;
    rdfs:comment "The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2244> .

schema:jobTitle a rdf:Property ;
    rdfs:label "jobTitle" ;
    rdfs:comment "The job title of the person (for example, Financial Manager)." ;
    schema:domainIncludes schema:Person ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2192> .

schema:keywords a rdf:Property ;
    rdfs:label "keywords" ;
    rdfs:comment "Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL .

schema:knownVehicleDamages a rdf:Property ;
    rdfs:label "knownVehicleDamages" ;
    rdfs:comment "A textual description of known damages, both repaired and unrepaired." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:knows a rdf:Property ;
    rdfs:label "knows" ;
    rdfs:comment "The most generic bi-directional social/work relation." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:knowsAbout a rdf:Property ;
    rdfs:label "knowsAbout" ;
    rdfs:comment "Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:Thing,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1688>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:knowsLanguage a rdf:Property ;
    rdfs:label "knowsLanguage" ;
    rdfs:comment "Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47)." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1688>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:labelDetails a rdf:Property ;
    rdfs:label "labelDetails" ;
    rdfs:comment "Link to the drug's label details." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:URL .

schema:landlord a rdf:Property ;
    rdfs:label "landlord" ;
    rdfs:comment "A sub property of participant. The owner of the real estate property." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:RentAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:language a rdf:Property ;
    rdfs:label "language" ;
    rdfs:comment "A sub property of instrument. The language used on this action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:CommunicateAction,
        schema:WriteAction ;
    schema:rangeIncludes schema:Language ;
    schema:supersededBy schema:inLanguage .

schema:lastReviewed a rdf:Property ;
    rdfs:label "lastReviewed" ;
    rdfs:comment "Date on which the content on this web page was last reviewed for accuracy and/or completeness." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Date .

schema:latitude a rdf:Property ;
    rdfs:label "latitude" ;
    rdfs:comment "The latitude of a location. For example \`\`\`37.42242\`\`\` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System))." ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:Place ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:layoutImage a rdf:Property ;
    rdfs:label "layoutImage" ;
    rdfs:comment "A schematic image showing the floorplan layout." ;
    rdfs:subPropertyOf schema:image ;
    schema:domainIncludes schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2690> .

schema:learningResourceType a rdf:Property ;
    rdfs:label "learningResourceType" ;
    rdfs:comment "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'." ;
    schema:domainIncludes schema:CreativeWork,
        schema:LearningResource ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text .

schema:leaseLength a rdf:Property ;
    rdfs:label "leaseLength" ;
    rdfs:comment "Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property." ;
    schema:domainIncludes schema:Accommodation,
        schema:Offer,
        schema:RealEstateListing ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration,
        schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:legalName a rdf:Property ;
    rdfs:label "legalName" ;
    rdfs:comment "The official name of the organization, e.g. the registered company name." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:legalStatus a rdf:Property ;
    rdfs:label "legalStatus" ;
    rdfs:comment "The drug or supplement's legal status, including any controlled substance schedules that apply." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug,
        schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugLegalStatus,
        schema:MedicalEnumeration,
        schema:Text .

schema:legislationChanges a rdf:Property ;
    rdfs:label "legislationChanges" ;
    rdfs:comment "Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href=\\"/legislationConsolidates\\">legislationConsolidates</a> property." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#changes> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#changes> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Legislation ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationConsolidates a rdf:Property ;
    rdfs:label "legislationConsolidates" ;
    rdfs:comment "Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#consolidates> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#consolidates> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Legislation ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationDate a rdf:Property ;
    rdfs:label "legislationDate" ;
    rdfs:comment "The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force." ;
    rdfs:subPropertyOf schema:dateCreated ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#date_document> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#date_document> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationDateVersion a rdf:Property ;
    rdfs:label "legislationDateVersion" ;
    rdfs:comment "The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the \\"National Insurance Contributions Act 2015\\")" ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#version_date> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#version_date> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationIdentifier a rdf:Property ;
    rdfs:label "legislationIdentifier" ;
    rdfs:comment "An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex." ;
    rdfs:subPropertyOf schema:identifier ;
    ns1:closeMatch <http://data.europa.eu/eli/ontology#id_local> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationJurisdiction a rdf:Property ;
    rdfs:label "legislationJurisdiction" ;
    rdfs:comment "The jurisdiction from which the legislation originates." ;
    rdfs:subPropertyOf schema:jurisdiction,
        schema:spatialCoverage ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#jurisdiction> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#jurisdiction> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:Text ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationLegalForce a rdf:Property ;
    rdfs:label "legislationLegalForce" ;
    rdfs:comment "Whether the legislation is currently in force, not in force, or partially in force." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#in_force> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#in_force> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:LegalForceStatus ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationLegalValue a rdf:Property ;
    rdfs:label "legislationLegalValue" ;
    rdfs:comment "The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a \\"stronger\\" legal value than the HTML file of the same act." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#legal_value> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#legal_value> ;
    schema:domainIncludes schema:LegislationObject ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:LegalValueLevel ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationPassedBy a rdf:Property ;
    rdfs:label "legislationPassedBy" ;
    rdfs:comment "The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the \\"legal author\\" of the law, as opposed to its physical author." ;
    rdfs:subPropertyOf schema:creator ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#passed_by> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#passed_by> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationResponsible a rdf:Property ;
    rdfs:label "legislationResponsible" ;
    rdfs:comment "An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#responsibility_of> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#responsibility_of> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationTransposes a rdf:Property ;
    rdfs:label "legislationTransposes" ;
    rdfs:comment "Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations." ;
    rdfs:subPropertyOf schema:legislationApplies ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#transposes> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#transposes> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Legislation ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:legislationType a rdf:Property ;
    rdfs:label "legislationType" ;
    rdfs:comment "The type of the legislation. Examples of values are \\"law\\", \\"act\\", \\"directive\\", \\"decree\\", \\"regulation\\", \\"statutory instrument\\", \\"loi organique\\", \\"rÃ¨glement grand-ducal\\", etc., depending on the country." ;
    rdfs:subPropertyOf schema:genre ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#type_document> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#type_document> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CategoryCode,
        schema:Text ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:leiCode a rdf:Property ;
    rdfs:label "leiCode" ;
    rdfs:comment "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#GLEIF> .

schema:lender a rdf:Property ;
    rdfs:label "lender" ;
    rdfs:comment "A sub property of participant. The person that lends the object being borrowed." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:BorrowAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:lesser a rdf:Property ;
    rdfs:label "lesser" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is lesser than the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:lesserOrEqual a rdf:Property ;
    rdfs:label "lesserOrEqual" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:letterer a rdf:Property ;
    rdfs:label "letterer" ;
    rdfs:comment "The individual who adds lettering, including speech balloons and sound effects, to artwork." ;
    schema:domainIncludes schema:ComicIssue,
        schema:ComicStory,
        schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:license a rdf:Property ;
    rdfs:label "license" ;
    rdfs:comment "A license document that applies to this content, typically indicated by URL." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL .

schema:line a rdf:Property ;
    rdfs:label "line" ;
    rdfs:comment "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space." ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text .

schema:linkRelationship a rdf:Property ;
    rdfs:label "linkRelationship" ;
    rdfs:comment "Indicates the relationship type of a Web link. " ;
    schema:domainIncludes schema:LinkRole ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1045> .

schema:liveBlogUpdate a rdf:Property ;
    rdfs:label "liveBlogUpdate" ;
    rdfs:comment "An update to the LiveBlog." ;
    schema:domainIncludes schema:LiveBlogPosting ;
    schema:rangeIncludes schema:BlogPosting .

schema:loanMortgageMandateAmount a rdf:Property ;
    rdfs:label "loanMortgageMandateAmount" ;
    rdfs:comment "Amount of mortgage mandate that can be converted into a proper mortgage at a later stage." ;
    schema:domainIncludes schema:MortgageLoan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:loanPaymentAmount a rdf:Property ;
    rdfs:label "loanPaymentAmount" ;
    rdfs:comment "The amount of money to pay in a single payment." ;
    schema:domainIncludes schema:RepaymentSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:loanPaymentFrequency a rdf:Property ;
    rdfs:label "loanPaymentFrequency" ;
    rdfs:comment "Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time." ;
    schema:domainIncludes schema:RepaymentSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:loanRepaymentForm a rdf:Property ;
    rdfs:label "loanRepaymentForm" ;
    rdfs:comment "A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment." ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:RepaymentSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:loanTerm a rdf:Property ;
    rdfs:label "loanTerm" ;
    rdfs:comment "The duration of the loan or credit agreement." ;
    rdfs:subPropertyOf schema:duration ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:loanType a rdf:Property ;
    rdfs:label "loanType" ;
    rdfs:comment "The type of a loan or credit." ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:locationCreated a rdf:Property ;
    rdfs:label "locationCreated" ;
    rdfs:comment "The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place .

schema:lodgingUnitDescription a rdf:Property ;
    rdfs:label "lodgingUnitDescription" ;
    rdfs:comment "A full description of the lodging unit." ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Text .

schema:lodgingUnitType a rdf:Property ;
    rdfs:label "lodgingUnitType" ;
    rdfs:comment "Textual description of the unit type (including suite vs. room, size of bed, etc.)." ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text .

schema:logo a rdf:Property ;
    rdfs:label "logo" ;
    rdfs:comment "An associated logo." ;
    rdfs:subPropertyOf schema:image ;
    schema:domainIncludes schema:Brand,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:longitude a rdf:Property ;
    rdfs:label "longitude" ;
    rdfs:comment "The longitude of a location. For example \`\`\`-122.08585\`\`\` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System))." ;
    schema:domainIncludes schema:GeoCoordinates,
        schema:Place ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:loser a rdf:Property ;
    rdfs:label "loser" ;
    rdfs:comment "A sub property of participant. The loser of the action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:WinAction ;
    schema:rangeIncludes schema:Person .

schema:lowPrice a rdf:Property ;
    rdfs:label "lowPrice" ;
    rdfs:comment "The lowest price of all offers available.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:lyricist a rdf:Property ;
    rdfs:label "lyricist" ;
    rdfs:comment "The person who wrote the words." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Person ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:lyrics a rdf:Property ;
    rdfs:label "lyrics" ;
    rdfs:comment "The words in the song." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:maintainer a rdf:Property ;
    rdfs:label "maintainer" ;
    rdfs:comment """A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
      """ ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2311> .

schema:manufacturer a rdf:Property ;
    rdfs:label "manufacturer" ;
    rdfs:comment "The manufacturer of the product." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug,
        schema:Product ;
    schema:rangeIncludes schema:Organization .

schema:map a rdf:Property ;
    rdfs:label "map" ;
    rdfs:comment "A URL to a map of the place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:hasMap .

schema:mapType a rdf:Property ;
    rdfs:label "mapType" ;
    rdfs:comment "Indicates the kind of Map, from the MapCategoryType Enumeration." ;
    schema:domainIncludes schema:Map ;
    schema:rangeIncludes schema:MapCategoryType .

schema:maps a rdf:Property ;
    rdfs:label "maps" ;
    rdfs:comment "A URL to a map of the place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:hasMap .

schema:marginOfError a rdf:Property ;
    rdfs:label "marginOfError" ;
    rdfs:comment "A marginOfError for an [[Observation]]." ;
    schema:domainIncludes schema:Observation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:masthead a rdf:Property ;
    rdfs:label "masthead" ;
    rdfs:comment "For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:materialExtent a rdf:Property ;
    rdfs:label "materialExtent"@en ;
    rdfs:comment "The quantity of the materials being described or an expression of the physical space they occupy."@en ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1759> .

schema:mathExpression a rdf:Property ;
    rdfs:label "mathExpression" ;
    rdfs:comment "A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard." ;
    schema:domainIncludes schema:MathSolver ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:SolveMathAction,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2740> .

schema:maxPrice a rdf:Property ;
    rdfs:label "maxPrice" ;
    rdfs:comment "The highest price if the price is a range." ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:maxValue a rdf:Property ;
    rdfs:label "maxValue" ;
    rdfs:comment "The upper value of some characteristic or property." ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:PropertyValueSpecification,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:maximumAttendeeCapacity a rdf:Property ;
    rdfs:label "maximumAttendeeCapacity" ;
    rdfs:comment "The total number of individuals that may attend an event or venue." ;
    schema:domainIncludes schema:Event,
        schema:Place ;
    schema:rangeIncludes schema:Integer .

schema:maximumEnrollment a rdf:Property ;
    rdfs:label "maximumEnrollment" ;
    rdfs:comment "The maximum number of students who may be enrolled in the program." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:maximumIntake a rdf:Property ;
    rdfs:label "maximumIntake" ;
    rdfs:comment "Recommended intake of this supplement for a given population as defined by a specific recommending authority." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug,
        schema:DrugStrength,
        schema:Substance ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MaximumDoseSchedule .

schema:maximumPhysicalAttendeeCapacity a rdf:Property ;
    rdfs:label "maximumPhysicalAttendeeCapacity" ;
    rdfs:comment "The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). " ;
    schema:domainIncludes schema:Event ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:maximumVirtualAttendeeCapacity a rdf:Property ;
    rdfs:label "maximumVirtualAttendeeCapacity" ;
    rdfs:comment "The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). " ;
    schema:domainIncludes schema:Event ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1842> .

schema:mealService a rdf:Property ;
    rdfs:label "mealService" ;
    rdfs:comment "Description of the meals that will be provided or available for purchase." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:Text .

schema:measuredProperty a rdf:Property ;
    rdfs:label "measuredProperty" ;
    rdfs:comment "The measuredProperty of an [[Observation]], either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties)." ;
    schema:domainIncludes schema:Observation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Property ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:measuredValue a rdf:Property ;
    rdfs:label "measuredValue" ;
    rdfs:comment "The measuredValue of an [[Observation]]." ;
    schema:domainIncludes schema:Observation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DataType ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:measurementTechnique a rdf:Property ;
    rdfs:label "measurementTechnique" ;
    rdfs:comment """A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.

For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".

If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".

If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
      """ ;
    schema:domainIncludes schema:DataCatalog,
        schema:DataDownload,
        schema:Dataset,
        schema:PropertyValue ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1425> .

schema:mechanismOfAction a rdf:Property ;
    rdfs:label "mechanismOfAction" ;
    rdfs:comment "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:mediaAuthenticityCategory a rdf:Property ;
    rdfs:label "mediaAuthenticityCategory" ;
    rdfs:comment "Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared)." ;
    schema:domainIncludes schema:MediaReview ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MediaManipulationRatingEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2450> .

schema:median a rdf:Property ;
    rdfs:label "median" ;
    rdfs:comment "The median value." ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:medicalAudience a rdf:Property ;
    rdfs:label "medicalAudience" ;
    rdfs:comment "Medical audience for page." ;
    schema:domainIncludes schema:MedicalWebPage ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalAudience,
        schema:MedicalAudienceType .

schema:medicalSpecialty a rdf:Property ;
    rdfs:label "medicalSpecialty" ;
    rdfs:comment "A medical specialty of the provider." ;
    schema:domainIncludes schema:Hospital,
        schema:MedicalClinic,
        schema:MedicalOrganization,
        schema:Physician ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalSpecialty .

schema:medicineSystem a rdf:Property ;
    rdfs:label "medicineSystem" ;
    rdfs:comment "The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicineSystem .

schema:meetsEmissionStandard a rdf:Property ;
    rdfs:label "meetsEmissionStandard" ;
    rdfs:comment "Indicates that the vehicle meets the respective emission standard." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:members a rdf:Property ;
    rdfs:label "members" ;
    rdfs:comment "A member of this organization." ;
    schema:domainIncludes schema:Organization,
        schema:ProgramMembership ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:member .

schema:membershipNumber a rdf:Property ;
    rdfs:label "membershipNumber" ;
    rdfs:comment "A unique identifier for the membership." ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Text .

schema:membershipPointsEarned a rdf:Property ;
    rdfs:label "membershipPointsEarned" ;
    rdfs:comment "The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)" ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2085> .

schema:memoryRequirements a rdf:Property ;
    rdfs:label "memoryRequirements" ;
    rdfs:comment "Minimum memory requirements." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:mentions a rdf:Property ;
    rdfs:label "mentions" ;
    rdfs:comment "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Thing .

schema:menu a rdf:Property ;
    rdfs:label "menu" ;
    rdfs:comment "Either the actual menu as a structured representation, as text, or a URL of the menu." ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Menu,
        schema:Text,
        schema:URL ;
    schema:supersededBy schema:hasMenu .

schema:menuAddOn a rdf:Property ;
    rdfs:label "menuAddOn" ;
    rdfs:comment "Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item." ;
    schema:domainIncludes schema:MenuItem ;
    schema:rangeIncludes schema:MenuItem,
        schema:MenuSection ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1541> .

schema:merchant a rdf:Property ;
    rdfs:label "merchant" ;
    rdfs:comment "'merchant' is an out-dated term for 'seller'." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:seller .

schema:merchantReturnDays a rdf:Property ;
    rdfs:label "merchantReturnDays" ;
    rdfs:comment "The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable." ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:merchantReturnLink a rdf:Property ;
    rdfs:label "merchantReturnLink" ;
    rdfs:comment "Indicates a Web page or service by URL, for product return." ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:messageAttachment a rdf:Property ;
    rdfs:label "messageAttachment" ;
    rdfs:comment "A CreativeWork attached to the message." ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:CreativeWork .

schema:mileageFromOdometer a rdf:Property ;
    rdfs:label "mileageFromOdometer" ;
    rdfs:comment "The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\\\\n\\\\nTypical unit code(s): KMT for kilometers, SMI for statute miles" ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:minPrice a rdf:Property ;
    rdfs:label "minPrice" ;
    rdfs:comment "The lowest price if the price is a range." ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:minValue a rdf:Property ;
    rdfs:label "minValue" ;
    rdfs:comment "The lower value of some characteristic or property." ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:PropertyValueSpecification,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:minimumPaymentDue a rdf:Property ;
    rdfs:label "minimumPaymentDue" ;
    rdfs:comment "The minimum payment required at this time." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification .

schema:missionCoveragePrioritiesPolicy a rdf:Property ;
    rdfs:label "missionCoveragePrioritiesPolicy" ;
    rdfs:comment "For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:model a rdf:Property ;
    rdfs:label "model" ;
    rdfs:comment "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties." ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:ProductModel,
        schema:Text .

schema:modelDate a rdf:Property ;
    rdfs:label "modelDate" ;
    rdfs:comment "The release date of a vehicle model (often used to differentiate versions of the same make and model)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:modifiedTime a rdf:Property ;
    rdfs:label "modifiedTime" ;
    rdfs:comment "The date and time the reservation was modified." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:DateTime .

schema:monthlyMinimumRepaymentAmount a rdf:Property ;
    rdfs:label "monthlyMinimumRepaymentAmount" ;
    rdfs:comment "The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month." ;
    schema:domainIncludes schema:PaymentCard ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:monthsOfExperience a rdf:Property ;
    rdfs:label "monthsOfExperience" ;
    rdfs:comment "Indicates the minimal number of months of experience required for a position." ;
    schema:domainIncludes schema:OccupationalExperienceRequirements ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2681> .

schema:mpn a rdf:Property ;
    rdfs:label "mpn" ;
    rdfs:comment "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:multipleValues a rdf:Property ;
    rdfs:label "multipleValues" ;
    rdfs:comment "Whether multiple values are allowed for the property.  Default is false." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean .

schema:muscleAction a rdf:Property ;
    rdfs:label "muscleAction" ;
    rdfs:comment "The movement the muscle generates." ;
    schema:domainIncludes schema:Muscle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:musicArrangement a rdf:Property ;
    rdfs:label "musicArrangement" ;
    rdfs:comment "An arrangement derived from the composition." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:MusicComposition ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:musicBy a rdf:Property ;
    rdfs:label "musicBy" ;
    rdfs:comment "The composer of the soundtrack." ;
    schema:domainIncludes schema:Clip,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:MusicGroup,
        schema:Person .

schema:musicCompositionForm a rdf:Property ;
    rdfs:label "musicCompositionForm" ;
    rdfs:comment "The type of composition (e.g. overture, sonata, symphony, etc.)." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:musicGroupMember a rdf:Property ;
    rdfs:label "musicGroupMember" ;
    rdfs:comment "A member of a music group&#x2014;for example, John, Paul, George, or Ringo." ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:member .

schema:musicReleaseFormat a rdf:Property ;
    rdfs:label "musicReleaseFormat" ;
    rdfs:comment "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.)." ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:MusicReleaseFormatType ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:musicalKey a rdf:Property ;
    rdfs:label "musicalKey" ;
    rdfs:comment "The key, mode, or scale this composition uses." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:naics a rdf:Property ;
    rdfs:label "naics" ;
    rdfs:comment "The North American Industry Classification System (NAICS) code for a particular organization or business person." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:name a rdf:Property ;
    rdfs:label "name" ;
    rdfs:comment "The name of the item." ;
    rdfs:subPropertyOf rdfs:label ;
    ns2:equivalentProperty <http://purl.org/dc/terms/title> ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text .

schema:namedPosition a rdf:Property ;
    rdfs:label "namedPosition" ;
    rdfs:comment "A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'." ;
    schema:domainIncludes schema:Role ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:roleName .

schema:nationality a rdf:Property ;
    rdfs:label "nationality" ;
    rdfs:comment "Nationality of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Country .

schema:naturalProgression a rdf:Property ;
    rdfs:label "naturalProgression" ;
    rdfs:comment "The expected progression of the condition if it is not treated and allowed to progress naturally." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:nerve a rdf:Property ;
    rdfs:label "nerve" ;
    rdfs:comment "The underlying innervation associated with the muscle." ;
    schema:domainIncludes schema:Muscle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Nerve .

schema:nerveMotor a rdf:Property ;
    rdfs:label "nerveMotor" ;
    rdfs:comment "The neurological pathway extension that involves muscle control." ;
    schema:domainIncludes schema:Nerve ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Muscle .

schema:netWorth a rdf:Property ;
    rdfs:label "netWorth" ;
    rdfs:comment "The total financial value of the person as calculated by subtracting assets from liabilities." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification .

schema:newsUpdatesAndGuidelines a rdf:Property ;
    rdfs:label "newsUpdatesAndGuidelines" ;
    rdfs:comment "Indicates a page with news updates and guidelines. This could often be (but is not required to be) the main page containing [[SpecialAnnouncement]] markup on a site." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:nextItem a rdf:Property ;
    rdfs:label "nextItem" ;
    rdfs:comment "A link to the ListItem that follows the current one." ;
    schema:domainIncludes schema:ListItem ;
    schema:rangeIncludes schema:ListItem .

schema:noBylinesPolicy a rdf:Property ;
    rdfs:label "noBylinesPolicy" ;
    rdfs:comment "For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1688>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:nonEqual a rdf:Property ;
    rdfs:label "nonEqual" ;
    rdfs:comment "This ordering relation for qualitative values indicates that the subject is not equal to the object." ;
    schema:domainIncludes schema:QualitativeValue ;
    schema:rangeIncludes schema:QualitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:nonProprietaryName a rdf:Property ;
    rdfs:label "nonProprietaryName" ;
    rdfs:comment "The generic name of this drug or supplement." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:nonprofitStatus a rdf:Property ;
    rdfs:label "nonprofitStatus" ;
    rdfs:comment "nonprofit Status indicates the legal status of a non-profit organization in its primary place of business." ;
    schema:domainIncludes schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:NonprofitType ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2543> .

schema:normalRange a rdf:Property ;
    rdfs:label "normalRange" ;
    rdfs:comment "Range of acceptable values for a typical patient, when applicable." ;
    schema:domainIncludes schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEnumeration,
        schema:Text .

schema:nsn a rdf:Property ;
    rdfs:label "nsn" ;
    rdfs:comment "Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. " ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2126> .

schema:numAdults a rdf:Property ;
    rdfs:label "numAdults" ;
    rdfs:comment "The number of adults staying in the unit." ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue .

schema:numChildren a rdf:Property ;
    rdfs:label "numChildren" ;
    rdfs:comment "The number of children staying in the unit." ;
    schema:domainIncludes schema:LodgingReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue .

schema:numConstraints a rdf:Property ;
    rdfs:label "numConstraints" ;
    rdfs:comment "Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]]." ;
    schema:domainIncludes schema:StatisticalPopulation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:numTracks a rdf:Property ;
    rdfs:label "numTracks" ;
    rdfs:comment "The number of tracks in this album or playlist." ;
    schema:domainIncludes schema:MusicPlaylist ;
    schema:rangeIncludes schema:Integer .

schema:numberOfAccommodationUnits a rdf:Property ;
    rdfs:label "numberOfAccommodationUnits" ;
    rdfs:comment "Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]]." ;
    schema:domainIncludes schema:ApartmentComplex,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfAirbags a rdf:Property ;
    rdfs:label "numberOfAirbags" ;
    rdfs:comment "The number or type of airbags in the vehicle." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:numberOfAvailableAccommodationUnits a rdf:Property ;
    rdfs:label "numberOfAvailableAccommodationUnits" ;
    rdfs:comment "Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]]." ;
    schema:domainIncludes schema:ApartmentComplex,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfAxles a rdf:Property ;
    rdfs:label "numberOfAxles" ;
    rdfs:comment "The number of axles.\\\\n\\\\nTypical unit code(s): C62" ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:numberOfBathroomsTotal a rdf:Property ;
    rdfs:label "numberOfBathroomsTotal" ;
    rdfs:comment "The total integer number of bathrooms in a some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): \\"The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.\\". See also [[numberOfRooms]]." ;
    schema:domainIncludes schema:Accommodation,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfBedrooms a rdf:Property ;
    rdfs:label "numberOfBedrooms" ;
    rdfs:comment "The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]]." ;
    schema:domainIncludes schema:Accommodation,
        schema:ApartmentComplex,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfBeds a rdf:Property ;
    rdfs:label "numberOfBeds" ;
    rdfs:comment "The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment." ;
    schema:domainIncludes schema:BedDetails ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:numberOfCredits a rdf:Property ;
    rdfs:label "numberOfCredits" ;
    rdfs:comment "The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram." ;
    schema:domainIncludes schema:Course,
        schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer,
        schema:StructuredValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:numberOfDoors a rdf:Property ;
    rdfs:label "numberOfDoors" ;
    rdfs:comment "The number of doors.\\\\n\\\\nTypical unit code(s): C62" ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:numberOfEmployees a rdf:Property ;
    rdfs:label "numberOfEmployees" ;
    rdfs:comment "The number of employees in an organization e.g. business." ;
    schema:domainIncludes schema:BusinessAudience,
        schema:Organization ;
    schema:rangeIncludes schema:QuantitativeValue .

schema:numberOfEpisodes a rdf:Property ;
    rdfs:label "numberOfEpisodes" ;
    rdfs:comment "The number of episodes in this season or series." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Integer .

schema:numberOfForwardGears a rdf:Property ;
    rdfs:label "numberOfForwardGears" ;
    rdfs:comment "The total number of forward gears available for the transmission system of the vehicle.\\\\n\\\\nTypical unit code(s): C62" ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:numberOfFullBathrooms a rdf:Property ;
    rdfs:label "numberOfFullBathrooms" ;
    rdfs:comment "Number of full bathrooms - The total number of full and Â¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field)." ;
    schema:domainIncludes schema:Accommodation,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfItems a rdf:Property ;
    rdfs:label "numberOfItems" ;
    rdfs:comment "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list." ;
    schema:domainIncludes schema:ItemList ;
    schema:rangeIncludes schema:Integer .

schema:numberOfLoanPayments a rdf:Property ;
    rdfs:label "numberOfLoanPayments" ;
    rdfs:comment "The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date." ;
    schema:domainIncludes schema:RepaymentSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:numberOfPages a rdf:Property ;
    rdfs:label "numberOfPages" ;
    rdfs:comment "The number of pages in the book." ;
    schema:domainIncludes schema:Book ;
    schema:rangeIncludes schema:Integer .

schema:numberOfPartialBathrooms a rdf:Property ;
    rdfs:label "numberOfPartialBathrooms" ;
    rdfs:comment "Number of partial bathrooms - The total number of half and Â¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). " ;
    schema:domainIncludes schema:Accommodation,
        schema:FloorPlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:numberOfPlayers a rdf:Property ;
    rdfs:label "numberOfPlayers" ;
    rdfs:comment "Indicate how many people can play this game (minimum, maximum, or range)." ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:QuantitativeValue .

schema:numberOfPreviousOwners a rdf:Property ;
    rdfs:label "numberOfPreviousOwners" ;
    rdfs:comment "The number of owners of the vehicle, including the current one.\\\\n\\\\nTypical unit code(s): C62" ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:numberOfRooms a rdf:Property ;
    rdfs:label "numberOfRooms" ;
    rdfs:comment """The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.""" ;
    schema:domainIncludes schema:Accommodation,
        schema:Apartment,
        schema:FloorPlan,
        schema:House,
        schema:LodgingBusiness,
        schema:SingleFamilyResidence,
        schema:Suite ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:numberOfSeasons a rdf:Property ;
    rdfs:label "numberOfSeasons" ;
    rdfs:comment "The number of seasons in this series." ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Integer .

schema:numberedPosition a rdf:Property ;
    rdfs:label "numberedPosition" ;
    rdfs:comment "A number associated with a role in an organization, for example, the number on an athlete's jersey." ;
    schema:domainIncludes schema:OrganizationRole ;
    schema:rangeIncludes schema:Number .

schema:nutrition a rdf:Property ;
    rdfs:label "nutrition" ;
    rdfs:comment "Nutrition information about the recipe or menu item." ;
    schema:domainIncludes schema:MenuItem,
        schema:Recipe ;
    schema:rangeIncludes schema:NutritionInformation .

schema:observationDate a rdf:Property ;
    rdfs:label "observationDate" ;
    rdfs:comment "The observationDate of an [[Observation]]." ;
    schema:domainIncludes schema:Observation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:observedNode a rdf:Property ;
    rdfs:label "observedNode" ;
    rdfs:comment "The observedNode of an [[Observation]], often a [[StatisticalPopulation]]." ;
    schema:domainIncludes schema:Observation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:StatisticalPopulation ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:occupancy a rdf:Property ;
    rdfs:label "occupancy" ;
    rdfs:comment """The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
Typical unit code(s): C62 for person""" ;
    schema:domainIncludes schema:Apartment,
        schema:HotelRoom,
        schema:SingleFamilyResidence,
        schema:Suite ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:occupationLocation a rdf:Property ;
    rdfs:label "occupationLocation" ;
    rdfs:comment " The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions." ;
    schema:domainIncludes schema:Occupation ;
    schema:rangeIncludes schema:AdministrativeArea ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:occupationalCategory a rdf:Property ;
    rdfs:label "occupationalCategory" ;
    rdfs:comment """A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\\\\n
Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.""" ;
    schema:domainIncludes schema:EducationalOccupationalProgram,
        schema:JobPosting,
        schema:Occupation,
        schema:WorkBasedProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CategoryCode,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698>,
        <https://github.com/schemaorg/schemaorg/issues/2192>,
        <https://github.com/schemaorg/schemaorg/issues/2289>,
        <https://github.com/schemaorg/schemaorg/issues/2460> .

schema:occupationalCredentialAwarded a rdf:Property ;
    rdfs:label "occupationalCredentialAwarded" ;
    rdfs:comment "A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program." ;
    schema:domainIncludes schema:Course,
        schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EducationalOccupationalCredential,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:offerCount a rdf:Property ;
    rdfs:label "offerCount" ;
    rdfs:comment "The number of offers for the product." ;
    schema:domainIncludes schema:AggregateOffer ;
    schema:rangeIncludes schema:Integer .

schema:offersPrescriptionByMail a rdf:Property ;
    rdfs:label "offersPrescriptionByMail" ;
    rdfs:comment "Whether prescriptions can be delivered by mail." ;
    schema:domainIncludes schema:HealthPlanFormulary ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:openingHours a rdf:Property ;
    rdfs:label "openingHours" ;
    rdfs:comment "The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\\\\n\\\\n* Days are specified using the following two-letter combinations: \`\`\`Mo\`\`\`, \`\`\`Tu\`\`\`, \`\`\`We\`\`\`, \`\`\`Th\`\`\`, \`\`\`Fr\`\`\`, \`\`\`Sa\`\`\`, \`\`\`Su\`\`\`.\\\\n* Times are specified using 24:00 format. For example, 3pm is specified as \`\`\`15:00\`\`\`, 10am as \`\`\`10:00\`\`\`. \\\\n* Here is an example: <code>&lt;time itemprop=\\"openingHours\\" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\\\\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>." ;
    schema:domainIncludes schema:CivicStructure,
        schema:LocalBusiness ;
    schema:rangeIncludes schema:Text .

schema:openingHoursSpecification a rdf:Property ;
    rdfs:label "openingHoursSpecification" ;
    rdfs:comment "The opening hours of a certain place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:OpeningHoursSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:opens a rdf:Property ;
    rdfs:label "opens" ;
    rdfs:comment "The opening hour of the place or service on the given day(s) of the week." ;
    schema:domainIncludes schema:OpeningHoursSpecification ;
    schema:rangeIncludes schema:Time ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:operatingSystem a rdf:Property ;
    rdfs:label "operatingSystem" ;
    rdfs:comment "Operating systems supported (Windows 7, OSX 10.6, Android 1.6)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:opponent a rdf:Property ;
    rdfs:label "opponent" ;
    rdfs:comment "A sub property of participant. The opponent on this action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Person .

schema:option a rdf:Property ;
    rdfs:label "option" ;
    rdfs:comment "A sub property of object. The options subject to this action." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:ChooseAction ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    schema:supersededBy schema:actionOption .

schema:orderDate a rdf:Property ;
    rdfs:label "orderDate" ;
    rdfs:comment "Date order was placed." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:orderDelivery a rdf:Property ;
    rdfs:label "orderDelivery" ;
    rdfs:comment "The delivery of the parcel related to this order or order item." ;
    schema:domainIncludes schema:Order,
        schema:OrderItem ;
    schema:rangeIncludes schema:ParcelDelivery .

schema:orderItemNumber a rdf:Property ;
    rdfs:label "orderItemNumber" ;
    rdfs:comment "The identifier of the order item." ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:Text .

schema:orderItemStatus a rdf:Property ;
    rdfs:label "orderItemStatus" ;
    rdfs:comment "The current status of the order item." ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:OrderStatus .

schema:orderNumber a rdf:Property ;
    rdfs:label "orderNumber" ;
    rdfs:comment "The identifier of the transaction." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Text .

schema:orderQuantity a rdf:Property ;
    rdfs:label "orderQuantity" ;
    rdfs:comment "The number of the item ordered. If the property is not set, assume the quantity is one." ;
    schema:domainIncludes schema:OrderItem ;
    schema:rangeIncludes schema:Number .

schema:orderStatus a rdf:Property ;
    rdfs:label "orderStatus" ;
    rdfs:comment "The current status of the order." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:OrderStatus .

schema:orderedItem a rdf:Property ;
    rdfs:label "orderedItem" ;
    rdfs:comment "The item ordered." ;
    schema:domainIncludes schema:Order,
        schema:OrderItem ;
    schema:rangeIncludes schema:OrderItem,
        schema:Product,
        schema:Service .

schema:organizer a rdf:Property ;
    rdfs:label "organizer" ;
    rdfs:comment "An organizer of an Event." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:originAddress a rdf:Property ;
    rdfs:label "originAddress" ;
    rdfs:comment "Shipper's address." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:PostalAddress .

schema:originatesFrom a rdf:Property ;
    rdfs:label "originatesFrom" ;
    rdfs:comment "The vasculature the lymphatic structure originates, or afferents, from." ;
    schema:domainIncludes schema:LymphaticVessel ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Vessel .

schema:overdosage a rdf:Property ;
    rdfs:label "overdosage" ;
    rdfs:comment "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:ownedFrom a rdf:Property ;
    rdfs:label "ownedFrom" ;
    rdfs:comment "The date and time of obtaining the product." ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:DateTime ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:ownedThrough a rdf:Property ;
    rdfs:label "ownedThrough" ;
    rdfs:comment "The date and time of giving up ownership on the product." ;
    schema:domainIncludes schema:OwnershipInfo ;
    schema:rangeIncludes schema:DateTime ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:ownershipFundingInfo a rdf:Property ;
    rdfs:label "ownershipFundingInfo" ;
    rdfs:comment "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:AboutPage,
        schema:CreativeWork,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:owns a rdf:Property ;
    rdfs:label "owns" ;
    rdfs:comment "Products owned by the organization or person." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:OwnershipInfo,
        schema:Product ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:pageEnd a rdf:Property ;
    rdfs:label "pageEnd" ;
    rdfs:comment "The page on which the work ends; for example \\"138\\" or \\"xvi\\"." ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/pageEnd> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:pageStart a rdf:Property ;
    rdfs:label "pageStart" ;
    rdfs:comment "The page on which the work starts; for example \\"135\\" or \\"xiii\\"." ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/pageStart> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:pagination a rdf:Property ;
    rdfs:label "pagination" ;
    rdfs:comment "Any description of pages that is not separated into pageStart and pageEnd; for example, \\"1-6, 9, 55\\" or \\"10-12, 46-49\\"." ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/pages> ;
    schema:domainIncludes schema:Article,
        schema:Chapter,
        schema:PublicationIssue,
        schema:PublicationVolume ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:parentItem a rdf:Property ;
    rdfs:label "parentItem" ;
    rdfs:comment "The parent of a question, answer or item in general." ;
    schema:domainIncludes schema:Comment ;
    schema:rangeIncludes schema:Comment .

schema:parentService a rdf:Property ;
    rdfs:label "parentService" ;
    rdfs:comment "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:rangeIncludes schema:BroadcastService .

schema:parents a rdf:Property ;
    rdfs:label "parents" ;
    rdfs:comment "A parents of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:parent .

schema:partOfEpisode a rdf:Property ;
    rdfs:label "partOfEpisode" ;
    rdfs:comment "The episode to which this clip belongs." ;
    rdfs:subPropertyOf schema:isPartOf ;
    schema:domainIncludes schema:Clip ;
    schema:rangeIncludes schema:Episode .

schema:partOfInvoice a rdf:Property ;
    rdfs:label "partOfInvoice" ;
    rdfs:comment "The order is being paid as part of the referenced Invoice." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:Invoice .

schema:partOfOrder a rdf:Property ;
    rdfs:label "partOfOrder" ;
    rdfs:comment "The overall order the items in this delivery were included in." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Order .

schema:partOfSeason a rdf:Property ;
    rdfs:label "partOfSeason" ;
    rdfs:comment "The season to which this episode belongs." ;
    rdfs:subPropertyOf schema:isPartOf ;
    schema:domainIncludes schema:Clip,
        schema:Episode ;
    schema:rangeIncludes schema:CreativeWorkSeason .

schema:partOfSystem a rdf:Property ;
    rdfs:label "partOfSystem" ;
    rdfs:comment "The anatomical or organ system that this structure is part of." ;
    schema:domainIncludes schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalSystem .

schema:partOfTVSeries a rdf:Property ;
    rdfs:label "partOfTVSeries" ;
    rdfs:comment "The TV series to which this episode or season belongs." ;
    rdfs:subPropertyOf schema:isPartOf ;
    schema:domainIncludes schema:TVClip,
        schema:TVEpisode,
        schema:TVSeason ;
    schema:rangeIncludes schema:TVSeries ;
    schema:supersededBy schema:partOfSeries .

schema:partySize a rdf:Property ;
    rdfs:label "partySize" ;
    rdfs:comment "Number of people the reservation should accommodate." ;
    schema:domainIncludes schema:FoodEstablishmentReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:Integer,
        schema:QuantitativeValue .

schema:passengerPriorityStatus a rdf:Property ;
    rdfs:label "passengerPriorityStatus" ;
    rdfs:comment "The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority)." ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text .

schema:passengerSequenceNumber a rdf:Property ;
    rdfs:label "passengerSequenceNumber" ;
    rdfs:comment "The passenger's sequence number as assigned by the airline." ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text .

schema:pathophysiology a rdf:Property ;
    rdfs:label "pathophysiology" ;
    rdfs:comment "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition." ;
    schema:domainIncludes schema:MedicalCondition,
        schema:PhysicalActivity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:pattern a rdf:Property ;
    rdfs:label "pattern" ;
    rdfs:comment "A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:payload a rdf:Property ;
    rdfs:label "payload" ;
    rdfs:comment "The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\\\\n\\\\nTypical unit code(s): KGM for kilogram, LBR for pound\\\\n\\\\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\\\\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\\\\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\\\\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:paymentAccepted a rdf:Property ;
    rdfs:label "paymentAccepted" ;
    rdfs:comment "Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc." ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text .

schema:paymentDue a rdf:Property ;
    rdfs:label "paymentDue" ;
    rdfs:comment "The date that payment is due." ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:DateTime ;
    schema:supersededBy schema:paymentDueDate .

schema:paymentMethod a rdf:Property ;
    rdfs:label "paymentMethod" ;
    rdfs:comment "The name of the credit card or other method of payment for the order." ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:PaymentMethod .

schema:paymentMethodId a rdf:Property ;
    rdfs:label "paymentMethodId" ;
    rdfs:comment "An identifier for the method of payment used (e.g. the last 4 digits of the credit card)." ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Text .

schema:paymentStatus a rdf:Property ;
    rdfs:label "paymentStatus" ;
    rdfs:comment "The status of payment; whether the invoice has been paid or not." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:PaymentStatusType,
        schema:Text .

schema:paymentUrl a rdf:Property ;
    rdfs:label "paymentUrl" ;
    rdfs:comment "The URL for sending a payment." ;
    schema:domainIncludes schema:Order ;
    schema:rangeIncludes schema:URL .

schema:penciler a rdf:Property ;
    rdfs:label "penciler" ;
    rdfs:comment "The individual who draws the primary narrative artwork." ;
    schema:domainIncludes schema:ComicIssue,
        schema:ComicStory,
        schema:VisualArtwork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:percentile10 a rdf:Property ;
    rdfs:label "percentile10" ;
    rdfs:comment "The 10th percentile value." ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:percentile25 a rdf:Property ;
    rdfs:label "percentile25" ;
    rdfs:comment "The 25th percentile value." ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:percentile75 a rdf:Property ;
    rdfs:label "percentile75" ;
    rdfs:comment "The 75th percentile value." ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:percentile90 a rdf:Property ;
    rdfs:label "percentile90" ;
    rdfs:comment "The 90th percentile value." ;
    schema:domainIncludes schema:QuantitativeValueDistribution ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:performerIn a rdf:Property ;
    rdfs:label "performerIn" ;
    rdfs:comment "Event that this person is a performer or participant in." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Event .

schema:performers a rdf:Property ;
    rdfs:label "performers" ;
    rdfs:comment "The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:performer .

schema:permissionType a rdf:Property ;
    rdfs:label "permissionType" ;
    rdfs:comment "The type of permission granted the person, organization, or audience." ;
    schema:domainIncludes schema:DigitalDocumentPermission ;
    schema:rangeIncludes schema:DigitalDocumentPermissionType .

schema:permissions a rdf:Property ;
    rdfs:label "permissions" ;
    rdfs:comment "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:permitAudience a rdf:Property ;
    rdfs:label "permitAudience" ;
    rdfs:comment "The target audience for this permit." ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Audience .

schema:permittedUsage a rdf:Property ;
    rdfs:label "permittedUsage" ;
    rdfs:comment "Indications regarding the permitted usage of the accommodation." ;
    schema:domainIncludes schema:Accommodation ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:petsAllowed a rdf:Property ;
    rdfs:label "petsAllowed" ;
    rdfs:comment "Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value." ;
    schema:domainIncludes schema:Accommodation,
        schema:ApartmentComplex,
        schema:FloorPlan,
        schema:LodgingBusiness ;
    schema:rangeIncludes schema:Boolean,
        schema:Text ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:phoneticText a rdf:Property ;
    rdfs:label "phoneticText" ;
    rdfs:comment "Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ËˆhjuËstÉ™n/." ;
    schema:domainIncludes schema:PronounceableText ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2108> .

schema:photos a rdf:Property ;
    rdfs:label "photos" ;
    rdfs:comment "Photographs of this place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:ImageObject,
        schema:Photograph ;
    schema:supersededBy schema:photo .

schema:physicalRequirement a rdf:Property ;
    rdfs:label "physicalRequirement" ;
    rdfs:comment "A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2384> .

schema:physiologicalBenefits a rdf:Property ;
    rdfs:label "physiologicalBenefits" ;
    rdfs:comment "Specific physiologic benefits associated to the plan." ;
    schema:domainIncludes schema:Diet ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:pickupLocation a rdf:Property ;
    rdfs:label "pickupLocation" ;
    rdfs:comment "Where a taxi will pick up a passenger or a rental car can be picked up." ;
    schema:domainIncludes schema:RentalCarReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:Place .

schema:pickupTime a rdf:Property ;
    rdfs:label "pickupTime" ;
    rdfs:comment "When a taxi will pickup a passenger or a rental car can be picked up." ;
    schema:domainIncludes schema:RentalCarReservation,
        schema:TaxiReservation ;
    schema:rangeIncludes schema:DateTime .

schema:playMode a rdf:Property ;
    rdfs:label "playMode" ;
    rdfs:comment "Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time." ;
    schema:domainIncludes schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:GamePlayMode .

schema:playerType a rdf:Property ;
    rdfs:label "playerType" ;
    rdfs:comment "Player type required&#x2014;for example, Flash or Silverlight." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Text .

schema:playersOnline a rdf:Property ;
    rdfs:label "playersOnline" ;
    rdfs:comment "Number of players on the server." ;
    schema:domainIncludes schema:GameServer ;
    schema:rangeIncludes schema:Integer .

schema:polygon a rdf:Property ;
    rdfs:label "polygon" ;
    rdfs:comment "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical." ;
    schema:domainIncludes schema:GeoShape ;
    schema:rangeIncludes schema:Text .

schema:populationType a rdf:Property ;
    rdfs:label "populationType" ;
    rdfs:comment "Indicates the populationType common to all members of a [[StatisticalPopulation]]." ;
    schema:domainIncludes schema:StatisticalPopulation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Class ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2291> .

schema:possibleComplication a rdf:Property ;
    rdfs:label "possibleComplication" ;
    rdfs:comment "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:possibleTreatment a rdf:Property ;
    rdfs:label "possibleTreatment" ;
    rdfs:comment "A possible treatment to address this condition, sign or symptom." ;
    schema:domainIncludes schema:MedicalCondition,
        schema:MedicalSignOrSymptom ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTherapy .

schema:postOfficeBoxNumber a rdf:Property ;
    rdfs:label "postOfficeBoxNumber" ;
    rdfs:comment "The post office box number for PO box addresses." ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text .

schema:postOp a rdf:Property ;
    rdfs:label "postOp" ;
    rdfs:comment "A description of the postoperative procedures, care, and/or followups for this device." ;
    schema:domainIncludes schema:MedicalDevice ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:postalCode a rdf:Property ;
    rdfs:label "postalCode" ;
    rdfs:comment "The postal code. For example, 94043." ;
    schema:domainIncludes schema:DefinedRegion,
        schema:GeoCoordinates,
        schema:GeoShape,
        schema:PostalAddress ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:postalCodeBegin a rdf:Property ;
    rdfs:label "postalCodeBegin" ;
    rdfs:comment "First postal code in a range (included)." ;
    schema:domainIncludes schema:PostalCodeRangeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:postalCodeEnd a rdf:Property ;
    rdfs:label "postalCodeEnd" ;
    rdfs:comment "Last postal code in the range (included). Needs to be after [[postalCodeBegin]]." ;
    schema:domainIncludes schema:PostalCodeRangeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:postalCodePrefix a rdf:Property ;
    rdfs:label "postalCodePrefix" ;
    rdfs:comment "A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK." ;
    schema:domainIncludes schema:DefinedRegion ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:postalCodeRange a rdf:Property ;
    rdfs:label "postalCodeRange" ;
    rdfs:comment "A defined range of postal codes." ;
    schema:domainIncludes schema:DefinedRegion ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:PostalCodeRangeSpecification ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:potentialAction a rdf:Property ;
    rdfs:label "potentialAction" ;
    rdfs:comment "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role." ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Action .

schema:preOp a rdf:Property ;
    rdfs:label "preOp" ;
    rdfs:comment "A description of the workup, testing, and other preparations required before implanting this device." ;
    schema:domainIncludes schema:MedicalDevice ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:predecessorOf a rdf:Property ;
    rdfs:label "predecessorOf" ;
    rdfs:comment "A pointer from a previous, often discontinued variant of the product to its newer variant." ;
    schema:domainIncludes schema:ProductModel ;
    schema:rangeIncludes schema:ProductModel ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:pregnancyCategory a rdf:Property ;
    rdfs:label "pregnancyCategory" ;
    rdfs:comment "Pregnancy category of this drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugPregnancyCategory .

schema:pregnancyWarning a rdf:Property ;
    rdfs:label "pregnancyWarning" ;
    rdfs:comment "Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:prepTime a rdf:Property ;
    rdfs:label "prepTime" ;
    rdfs:comment "The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)." ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration .

schema:preparation a rdf:Property ;
    rdfs:label "preparation" ;
    rdfs:comment "Typical preparation that a patient must undergo before having the procedure performed." ;
    schema:domainIncludes schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity,
        schema:Text .

schema:prescribingInfo a rdf:Property ;
    rdfs:label "prescribingInfo" ;
    rdfs:comment "Link to prescribing information for the drug." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:URL .

schema:prescriptionStatus a rdf:Property ;
    rdfs:label "prescriptionStatus" ;
    rdfs:comment "Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:DrugPrescriptionStatus,
        schema:Text .

schema:previousItem a rdf:Property ;
    rdfs:label "previousItem" ;
    rdfs:comment "A link to the ListItem that preceeds the current one." ;
    schema:domainIncludes schema:ListItem ;
    schema:rangeIncludes schema:ListItem .

schema:previousStartDate a rdf:Property ;
    rdfs:label "previousStartDate" ;
    rdfs:comment "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Date .

schema:price a rdf:Property ;
    rdfs:label "price" ;
    rdfs:comment """The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\\\\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
      """ ;
    schema:domainIncludes schema:Offer,
        schema:PriceSpecification,
        schema:TradeAction ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:priceComponent a rdf:Property ;
    rdfs:label "priceComponent" ;
    rdfs:comment "This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node." ;
    schema:domainIncludes schema:CompoundPriceSpecification ;
    schema:rangeIncludes schema:UnitPriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:priceComponentType a rdf:Property ;
    rdfs:label "priceComponentType" ;
    rdfs:comment "Identifies a price component (for example, a line item on an invoice), part of the total price for an offer." ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:PriceComponentTypeEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2689> .

schema:priceCurrency a rdf:Property ;
    rdfs:label "priceCurrency" ;
    rdfs:comment "The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\\\\n\\\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. \\"USD\\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. \\"BTC\\"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. \\"Ithaca HOUR\\"." ;
    schema:domainIncludes schema:Offer,
        schema:PriceSpecification,
        schema:Reservation,
        schema:Ticket,
        schema:TradeAction ;
    schema:rangeIncludes schema:Text .

schema:priceRange a rdf:Property ;
    rdfs:label "priceRange" ;
    rdfs:comment "The price range of the business, for example \`\`\`$$$\`\`\`." ;
    schema:domainIncludes schema:LocalBusiness ;
    schema:rangeIncludes schema:Text .

schema:priceSpecification a rdf:Property ;
    rdfs:label "priceSpecification" ;
    rdfs:comment "One or more detailed price specifications, indicating the unit price and delivery or payment charges." ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:TradeAction ;
    schema:rangeIncludes schema:PriceSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:priceType a rdf:Property ;
    rdfs:label "priceType" ;
    rdfs:comment "Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration." ;
    schema:domainIncludes schema:CompoundPriceSpecification,
        schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:PriceTypeEnumeration,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:priceValidUntil a rdf:Property ;
    rdfs:label "priceValidUntil" ;
    rdfs:comment "The date after which the price is no longer available." ;
    schema:domainIncludes schema:Offer ;
    schema:rangeIncludes schema:Date .

schema:primaryImageOfPage a rdf:Property ;
    rdfs:label "primaryImageOfPage" ;
    rdfs:comment "Indicates the main image on the page." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:ImageObject .

schema:primaryPrevention a rdf:Property ;
    rdfs:label "primaryPrevention" ;
    rdfs:comment "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTherapy .

schema:printColumn a rdf:Property ;
    rdfs:label "printColumn" ;
    rdfs:comment "The number of the column in which the NewsArticle appears in the print edition." ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text .

schema:printEdition a rdf:Property ;
    rdfs:label "printEdition" ;
    rdfs:comment "The edition of the print product in which the NewsArticle appears." ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text .

schema:printPage a rdf:Property ;
    rdfs:label "printPage" ;
    rdfs:comment "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18)." ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text .

schema:printSection a rdf:Property ;
    rdfs:label "printSection" ;
    rdfs:comment "If this NewsArticle appears in print, this field indicates the print section in which the article appeared." ;
    schema:domainIncludes schema:NewsArticle ;
    schema:rangeIncludes schema:Text .

schema:procedure a rdf:Property ;
    rdfs:label "procedure" ;
    rdfs:comment "A description of the procedure involved in setting up, using, and/or installing the device." ;
    schema:domainIncludes schema:MedicalDevice ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:procedureType a rdf:Property ;
    rdfs:label "procedureType" ;
    rdfs:comment "The type of procedure, for example Surgical, Noninvasive, or Percutaneous." ;
    schema:domainIncludes schema:MedicalProcedure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalProcedureType .

schema:processingTime a rdf:Property ;
    rdfs:label "processingTime" ;
    rdfs:comment "Estimated processing time for the service using this channel." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Duration .

schema:processorRequirements a rdf:Property ;
    rdfs:label "processorRequirements" ;
    rdfs:comment "Processor architecture required to run the application (e.g. IA64)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:producer a rdf:Property ;
    rdfs:label "producer" ;
    rdfs:comment "The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.)." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:produces a rdf:Property ;
    rdfs:label "produces" ;
    rdfs:comment "The tangible thing generated by the service, e.g. a passport, permit, etc." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Thing ;
    schema:supersededBy schema:serviceOutput .

schema:productGroupID a rdf:Property ;
    rdfs:label "productGroupID" ;
    rdfs:comment "Indicates a textual identifier for a ProductGroup." ;
    schema:domainIncludes schema:ProductGroup ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:productID a rdf:Property ;
    rdfs:label "productID" ;
    rdfs:comment "The product identifier, such as ISBN. For example: \`\`\` meta itemprop=\\"productID\\" content=\\"isbn:123-456-789\\" \`\`\`." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Text .

schema:productSupported a rdf:Property ;
    rdfs:label "productSupported" ;
    rdfs:comment "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \\"iPhone\\") or a general category of products or services (e.g. \\"smartphones\\")." ;
    schema:domainIncludes schema:ContactPoint ;
    schema:rangeIncludes schema:Product,
        schema:Text .

schema:productionCompany a rdf:Property ;
    rdfs:label "productionCompany" ;
    rdfs:comment "The production company or studio responsible for the item e.g. series, video game, episode etc." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:Episode,
        schema:MediaObject,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Organization .

schema:productionDate a rdf:Property ;
    rdfs:label "productionDate" ;
    rdfs:comment "The date of production of the item, e.g. vehicle." ;
    schema:domainIncludes schema:Product,
        schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:proficiencyLevel a rdf:Property ;
    rdfs:label "proficiencyLevel" ;
    rdfs:comment "Proficiency needed for this content; expected values: 'Beginner', 'Expert'." ;
    schema:domainIncludes schema:TechArticle ;
    schema:rangeIncludes schema:Text .

schema:programMembershipUsed a rdf:Property ;
    rdfs:label "programMembershipUsed" ;
    rdfs:comment "Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:ProgramMembership .

schema:programName a rdf:Property ;
    rdfs:label "programName" ;
    rdfs:comment "The program providing the membership." ;
    schema:domainIncludes schema:ProgramMembership ;
    schema:rangeIncludes schema:Text .

schema:programPrerequisites a rdf:Property ;
    rdfs:label "programPrerequisites" ;
    rdfs:comment "Prerequisites for enrolling in the program." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:AlignmentObject,
        schema:Course,
        schema:EducationalOccupationalCredential,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:programType a rdf:Property ;
    rdfs:label "programType" ;
    rdfs:comment "The type of educational or occupational program. For example, classroom, internship, alternance, etc.." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2460> .

schema:programmingLanguage a rdf:Property ;
    rdfs:label "programmingLanguage" ;
    rdfs:comment "The computer programming language." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:ComputerLanguage,
        schema:Text .

schema:programmingModel a rdf:Property ;
    rdfs:label "programmingModel" ;
    rdfs:comment "Indicates whether API is managed or unmanaged." ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text .

schema:propertyID a rdf:Property ;
    rdfs:label "propertyID" ;
    rdfs:comment """A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
Standards bodies should promote a standard prefix for the identifiers of properties from their standards.""" ;
    schema:domainIncludes schema:PropertyValue ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:proprietaryName a rdf:Property ;
    rdfs:label "proprietaryName" ;
    rdfs:comment "Proprietary name given to the diet plan, typically by its originator or creator." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:proteinContent a rdf:Property ;
    rdfs:label "proteinContent" ;
    rdfs:comment "The number of grams of protein." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:providerMobility a rdf:Property ;
    rdfs:label "providerMobility" ;
    rdfs:comment "Indicates the mobility of a provided service (e.g. 'static', 'dynamic')." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Text .

schema:providesService a rdf:Property ;
    rdfs:label "providesService" ;
    rdfs:comment "The service provided by this channel." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Service .

schema:publicAccess a rdf:Property ;
    rdfs:label "publicAccess" ;
    rdfs:comment "A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value" ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Boolean .

schema:publicTransportClosuresInfo a rdf:Property ;
    rdfs:label "publicTransportClosuresInfo" ;
    rdfs:comment "Information about public transport closures." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:publication a rdf:Property ;
    rdfs:label "publication" ;
    rdfs:comment "A publication event associated with the item." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:PublicationEvent .

schema:publicationType a rdf:Property ;
    rdfs:label "publicationType" ;
    rdfs:comment "The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html)." ;
    schema:domainIncludes schema:MedicalScholarlyArticle ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:publishedBy a rdf:Property ;
    rdfs:label "publishedBy" ;
    rdfs:comment "An agent associated with the publication event." ;
    schema:domainIncludes schema:PublicationEvent ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:publishedOn a rdf:Property ;
    rdfs:label "publishedOn" ;
    rdfs:comment "A broadcast service associated with the publication event." ;
    schema:domainIncludes schema:PublicationEvent ;
    schema:rangeIncludes schema:BroadcastService .

schema:publisher a rdf:Property ;
    rdfs:label "publisher" ;
    rdfs:comment "The publisher of the creative work." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:publisherImprint a rdf:Property ;
    rdfs:label "publisherImprint" ;
    rdfs:comment "The publishing division which published the comic." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Organization .

schema:purchaseDate a rdf:Property ;
    rdfs:label "purchaseDate" ;
    rdfs:comment "The date the item e.g. vehicle was purchased by the current owner." ;
    schema:domainIncludes schema:Product,
        schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:qualifications a rdf:Property ;
    rdfs:label "qualifications" ;
    rdfs:comment "Specific qualifications required for this role or Occupation." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:EducationalOccupationalCredential,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698>,
        <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:quarantineGuidelines a rdf:Property ;
    rdfs:label "quarantineGuidelines" ;
    rdfs:comment "Guidelines about quarantine rules, e.g. in the context of a pandemic." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:query a rdf:Property ;
    rdfs:label "query" ;
    rdfs:comment "A sub property of instrument. The query used on this action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:SearchAction ;
    schema:rangeIncludes schema:Text .

schema:quest a rdf:Property ;
    rdfs:label "quest" ;
    rdfs:comment "The task that a player-controlled character, or group of characters may complete in order to gain a reward." ;
    schema:domainIncludes schema:Game,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Thing .

schema:question a rdf:Property ;
    rdfs:label "question" ;
    rdfs:comment "A sub property of object. A question." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:AskAction ;
    schema:rangeIncludes schema:Question .

schema:rangeIncludes a rdf:Property ;
    rdfs:label "rangeIncludes" ;
    rdfs:comment "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property." ;
    schema:domainIncludes schema:Property ;
    schema:isPartOf <https://meta.schema.org> ;
    schema:rangeIncludes schema:Class .

schema:ratingCount a rdf:Property ;
    rdfs:label "ratingCount" ;
    rdfs:comment "The count of total number of ratings." ;
    schema:domainIncludes schema:AggregateRating ;
    schema:rangeIncludes schema:Integer .

schema:ratingExplanation a rdf:Property ;
    rdfs:label "ratingExplanation" ;
    rdfs:comment "A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with \\"fact check\\" markup using [[ClaimReview]]." ;
    schema:domainIncludes schema:Rating ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2300> .

schema:ratingValue a rdf:Property ;
    rdfs:label "ratingValue" ;
    rdfs:comment "The rating for the content.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:readBy a rdf:Property ;
    rdfs:label "readBy" ;
    rdfs:comment "A person who reads (performs) the audiobook." ;
    rdfs:subPropertyOf schema:actor ;
    schema:domainIncludes schema:Audiobook ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Person .

schema:readonlyValue a rdf:Property ;
    rdfs:label "readonlyValue" ;
    rdfs:comment "Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a \\"hidden\\" input in an HTML form." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean .

schema:realEstateAgent a rdf:Property ;
    rdfs:label "realEstateAgent" ;
    rdfs:comment "A sub property of participant. The real estate agent involved in the action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:RentAction ;
    schema:rangeIncludes schema:RealEstateAgent .

schema:recipe a rdf:Property ;
    rdfs:label "recipe" ;
    rdfs:comment "A sub property of instrument. The recipe/instructions used to perform the action." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:CookAction ;
    schema:rangeIncludes schema:Recipe .

schema:recipeCategory a rdf:Property ;
    rdfs:label "recipeCategory" ;
    rdfs:comment "The category of the recipeâ€”for example, appetizer, entree, etc." ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text .

schema:recipeCuisine a rdf:Property ;
    rdfs:label "recipeCuisine" ;
    rdfs:comment "The cuisine of the recipe (for example, French or Ethiopian)." ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text .

schema:recipeInstructions a rdf:Property ;
    rdfs:label "recipeInstructions" ;
    rdfs:comment "A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items." ;
    rdfs:subPropertyOf schema:step ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:CreativeWork,
        schema:ItemList,
        schema:Text .

schema:recipeYield a rdf:Property ;
    rdfs:label "recipeYield" ;
    rdfs:comment "The quantity produced by the recipe (for example, number of people served, number of servings, etc)." ;
    rdfs:subPropertyOf schema:yield ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text .

schema:recognizedBy a rdf:Property ;
    rdfs:label "recognizedBy" ;
    rdfs:comment "An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation." ;
    schema:domainIncludes schema:EducationalOccupationalCredential ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:recognizingAuthority a rdf:Property ;
    rdfs:label "recognizingAuthority" ;
    rdfs:comment "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Organization .

schema:recommendationStrength a rdf:Property ;
    rdfs:label "recommendationStrength" ;
    rdfs:comment "Strength of the guideline's recommendation (e.g. 'class I')." ;
    schema:domainIncludes schema:MedicalGuidelineRecommendation ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:recommendedIntake a rdf:Property ;
    rdfs:label "recommendedIntake" ;
    rdfs:comment "Recommended intake of this supplement for a given population as defined by a specific recommending authority." ;
    schema:domainIncludes schema:DietarySupplement ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:RecommendedDoseSchedule .

schema:recordLabel a rdf:Property ;
    rdfs:label "recordLabel" ;
    rdfs:comment "The label that issued the release." ;
    ns2:equivalentProperty <http://purl.org/ontology/mo/label> ;
    schema:domainIncludes schema:MusicRelease ;
    schema:rangeIncludes schema:Organization ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:recourseLoan a rdf:Property ;
    rdfs:label "recourseLoan" ;
    rdfs:comment "The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money." ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:referenceQuantity a rdf:Property ;
    rdfs:label "referenceQuantity" ;
    rdfs:comment "The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit." ;
    schema:domainIncludes schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsProperties>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:referencesOrder a rdf:Property ;
    rdfs:label "referencesOrder" ;
    rdfs:comment "The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Order .

schema:refundType a rdf:Property ;
    rdfs:label "refundType" ;
    rdfs:comment "A refundType, from an enumerated list." ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:RefundTypeEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:regionDrained a rdf:Property ;
    rdfs:label "regionDrained" ;
    rdfs:comment "The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ." ;
    schema:domainIncludes schema:LymphaticVessel,
        schema:Vein ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem .

schema:regionsAllowed a rdf:Property ;
    rdfs:label "regionsAllowed" ;
    rdfs:comment "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166)." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Place .

schema:relatedAnatomy a rdf:Property ;
    rdfs:label "relatedAnatomy" ;
    rdfs:comment "Anatomical systems or structures that relate to the superficial anatomy." ;
    schema:domainIncludes schema:SuperficialAnatomy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem .

schema:relatedCondition a rdf:Property ;
    rdfs:label "relatedCondition" ;
    rdfs:comment "A medical condition associated with this anatomy." ;
    schema:domainIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem,
        schema:SuperficialAnatomy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalCondition .

schema:relatedDrug a rdf:Property ;
    rdfs:label "relatedDrug" ;
    rdfs:comment "Any other drug related to this one, for example commonly-prescribed alternatives." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Drug .

schema:relatedLink a rdf:Property ;
    rdfs:label "relatedLink" ;
    rdfs:comment "A link related to this web page, for example to other related web pages." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL .

schema:relatedStructure a rdf:Property ;
    rdfs:label "relatedStructure" ;
    rdfs:comment "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system." ;
    schema:domainIncludes schema:AnatomicalSystem ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:relatedTherapy a rdf:Property ;
    rdfs:label "relatedTherapy" ;
    rdfs:comment "A medical therapy related to this anatomy." ;
    schema:domainIncludes schema:AnatomicalStructure,
        schema:AnatomicalSystem,
        schema:SuperficialAnatomy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTherapy .

schema:relatedTo a rdf:Property ;
    rdfs:label "relatedTo" ;
    rdfs:comment "The most generic familial relation." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:releaseDate a rdf:Property ;
    rdfs:label "releaseDate" ;
    rdfs:comment "The release date of a product or product model. This can be used to distinguish the exact variant of a product." ;
    schema:domainIncludes schema:Product ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:releaseNotes a rdf:Property ;
    rdfs:label "releaseNotes" ;
    rdfs:comment "Description of what changed in this version." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:releasedEvent a rdf:Property ;
    rdfs:label "releasedEvent" ;
    rdfs:comment "The place and time the release was issued, expressed as a PublicationEvent." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:PublicationEvent .

schema:relevantOccupation a rdf:Property ;
    rdfs:label "relevantOccupation" ;
    rdfs:comment "The Occupation for the JobPosting." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Occupation ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:relevantSpecialty a rdf:Property ;
    rdfs:label "relevantSpecialty" ;
    rdfs:comment "If applicable, a medical specialty in which this entity is relevant." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalSpecialty .

schema:remainingAttendeeCapacity a rdf:Property ;
    rdfs:label "remainingAttendeeCapacity" ;
    rdfs:comment "The number of attendee places for an event that remain unallocated." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Integer .

schema:renegotiableLoan a rdf:Property ;
    rdfs:label "renegotiableLoan" ;
    rdfs:comment "Whether the terms for payment of interest can be renegotiated during the life of the loan." ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO>,
        <https://github.com/schemaorg/schemaorg/issues/1253> .

schema:repeatCount a rdf:Property ;
    rdfs:label "repeatCount" ;
    rdfs:comment "Defines the number of times a recurring [[Event]] will take place" ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:repeatFrequency a rdf:Property ;
    rdfs:label "repeatFrequency" ;
    rdfs:comment """Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between
      events should be defined as a [[Duration]] of time.""" ;
    rdfs:subPropertyOf schema:frequency ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:repetitions a rdf:Property ;
    rdfs:label "repetitions" ;
    rdfs:comment "Number of times one should repeat the activity." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue .

schema:replacee a rdf:Property ;
    rdfs:label "replacee" ;
    rdfs:comment "A sub property of object. The object that is being replaced." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:ReplaceAction ;
    schema:rangeIncludes schema:Thing .

schema:replacer a rdf:Property ;
    rdfs:label "replacer" ;
    rdfs:comment "A sub property of object. The object that replaces." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:ReplaceAction ;
    schema:rangeIncludes schema:Thing .

schema:replyToUrl a rdf:Property ;
    rdfs:label "replyToUrl" ;
    rdfs:comment "The URL at which a reply may be posted to the specified UserComment." ;
    schema:domainIncludes schema:UserComments ;
    schema:rangeIncludes schema:URL .

schema:reportNumber a rdf:Property ;
    rdfs:label "reportNumber" ;
    rdfs:comment "The number or other unique designator assigned to a Report by the publishing organization." ;
    schema:domainIncludes schema:Report ;
    schema:rangeIncludes schema:Text .

schema:representativeOfPage a rdf:Property ;
    rdfs:label "representativeOfPage" ;
    rdfs:comment "Indicates whether this image is representative of the content of the page." ;
    schema:domainIncludes schema:ImageObject ;
    schema:rangeIncludes schema:Boolean .

schema:requiredCollateral a rdf:Property ;
    rdfs:label "requiredCollateral" ;
    rdfs:comment "Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)" ;
    schema:domainIncludes schema:LoanOrCredit ;
    schema:rangeIncludes schema:Text,
        schema:Thing ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO> .

schema:requiredGender a rdf:Property ;
    rdfs:label "requiredGender" ;
    rdfs:comment "Audiences defined by a person's gender." ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Text .

schema:requiredMaxAge a rdf:Property ;
    rdfs:label "requiredMaxAge" ;
    rdfs:comment "Audiences defined by a person's maximum age." ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Integer .

schema:requiredMinAge a rdf:Property ;
    rdfs:label "requiredMinAge" ;
    rdfs:comment "Audiences defined by a person's minimum age." ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Integer .

schema:requiredQuantity a rdf:Property ;
    rdfs:label "requiredQuantity" ;
    rdfs:comment "The required quantity of the item(s)." ;
    schema:domainIncludes schema:HowToItem ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue,
        schema:Text .

schema:requirements a rdf:Property ;
    rdfs:label "requirements" ;
    rdfs:comment "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:softwareRequirements .

schema:requiresSubscription a rdf:Property ;
    rdfs:label "requiresSubscription" ;
    rdfs:comment "Indicates if use of the media require a subscription  (either paid or free). Allowed values are \`\`\`true\`\`\` or \`\`\`false\`\`\` (note that an earlier version had 'yes', 'no')." ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:MediaObject ;
    schema:rangeIncludes schema:Boolean,
        schema:MediaSubscription ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741> .

schema:reservationFor a rdf:Property ;
    rdfs:label "reservationFor" ;
    rdfs:comment "The thing -- flight, event, restaurant,etc. being reserved." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Thing .

schema:reservationId a rdf:Property ;
    rdfs:label "reservationId" ;
    rdfs:comment "A unique identifier for the reservation." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Text .

schema:reservationStatus a rdf:Property ;
    rdfs:label "reservationStatus" ;
    rdfs:comment "The current status of the reservation." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:ReservationStatusType .

schema:reservedTicket a rdf:Property ;
    rdfs:label "reservedTicket" ;
    rdfs:comment "A ticket associated with the reservation." ;
    schema:domainIncludes schema:Reservation ;
    schema:rangeIncludes schema:Ticket .

schema:responsibilities a rdf:Property ;
    rdfs:label "responsibilities" ;
    rdfs:comment "Responsibilities associated with this role or Occupation." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:restPeriods a rdf:Property ;
    rdfs:label "restPeriods" ;
    rdfs:comment "How often one should break from the activity." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text .

schema:resultComment a rdf:Property ;
    rdfs:label "resultComment" ;
    rdfs:comment "A sub property of result. The Comment created or sent as a result of this action." ;
    rdfs:subPropertyOf schema:result ;
    schema:domainIncludes schema:CommentAction,
        schema:ReplyAction ;
    schema:rangeIncludes schema:Comment .

schema:resultReview a rdf:Property ;
    rdfs:label "resultReview" ;
    rdfs:comment "A sub property of result. The review that resulted in the performing of the action." ;
    rdfs:subPropertyOf schema:result ;
    schema:domainIncludes schema:ReviewAction ;
    schema:rangeIncludes schema:Review .

schema:returnFees a rdf:Property ;
    rdfs:label "returnFees" ;
    rdfs:comment "Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy" ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ReturnFeesEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:returnPolicyCategory a rdf:Property ;
    rdfs:label "returnPolicyCategory" ;
    rdfs:comment "A returnPolicyCategory expresses at most one of several enumerated kinds of return." ;
    schema:domainIncludes schema:MerchantReturnPolicy ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MerchantReturnEnumeration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:reviewAspect a rdf:Property ;
    rdfs:label "reviewAspect" ;
    rdfs:comment "This Review or Rating is relevant to this part or facet of the itemReviewed." ;
    schema:domainIncludes schema:Guide,
        schema:Rating,
        schema:Review ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1689> .

schema:reviewBody a rdf:Property ;
    rdfs:label "reviewBody" ;
    rdfs:comment "The actual body of the review." ;
    schema:domainIncludes schema:Review ;
    schema:rangeIncludes schema:Text .

schema:reviewCount a rdf:Property ;
    rdfs:label "reviewCount" ;
    rdfs:comment "The count of total number of reviews." ;
    schema:domainIncludes schema:AggregateRating ;
    schema:rangeIncludes schema:Integer .

schema:reviewRating a rdf:Property ;
    rdfs:label "reviewRating" ;
    rdfs:comment "The rating given in this review. Note that reviews can themselves be rated. The \`\`\`reviewRating\`\`\` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work." ;
    schema:domainIncludes schema:Review ;
    schema:rangeIncludes schema:Rating .

schema:reviewedBy a rdf:Property ;
    rdfs:label "reviewedBy" ;
    rdfs:comment "People or organizations that have reviewed the content on this web page for accuracy and/or completeness." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:reviews a rdf:Property ;
    rdfs:label "reviews" ;
    rdfs:comment "Review of the item." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product ;
    schema:rangeIncludes schema:Review ;
    schema:supersededBy schema:review .

schema:riskFactor a rdf:Property ;
    rdfs:label "riskFactor" ;
    rdfs:comment "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalRiskFactor .

schema:risks a rdf:Property ;
    rdfs:label "risks" ;
    rdfs:comment "Specific physiologic risks associated to the diet plan." ;
    schema:domainIncludes schema:Diet ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:roofLoad a rdf:Property ;
    rdfs:label "roofLoad" ;
    rdfs:comment "The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\\\\n\\\\nTypical unit code(s): KGM for kilogram, LBR for pound\\\\n\\\\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\\\\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\\\\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:BusOrCoach,
        schema:Car ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:rsvpResponse a rdf:Property ;
    rdfs:label "rsvpResponse" ;
    rdfs:comment "The response (yes, no, maybe) to the RSVP." ;
    schema:domainIncludes schema:RsvpAction ;
    schema:rangeIncludes schema:RsvpResponseType .

schema:runsTo a rdf:Property ;
    rdfs:label "runsTo" ;
    rdfs:comment "The vasculature the lymphatic structure runs, or efferents, to." ;
    schema:domainIncludes schema:LymphaticVessel ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Vessel .

schema:runtime a rdf:Property ;
    rdfs:label "runtime" ;
    rdfs:comment "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:runtimePlatform .

schema:rxcui a rdf:Property ;
    rdfs:label "rxcui" ;
    rdfs:comment "The RxCUI drug identifier from RXNORM." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:safetyConsideration a rdf:Property ;
    rdfs:label "safetyConsideration" ;
    rdfs:comment "Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement." ;
    schema:domainIncludes schema:DietarySupplement ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:salaryCurrency a rdf:Property ;
    rdfs:label "salaryCurrency" ;
    rdfs:comment "The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee." ;
    schema:domainIncludes schema:EmployeeRole,
        schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:salaryUponCompletion a rdf:Property ;
    rdfs:label "salaryUponCompletion" ;
    rdfs:comment "The expected salary upon completing the training." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmountDistribution ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:sameAs a rdf:Property ;
    rdfs:label "sameAs" ;
    rdfs:comment "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website." ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL .

schema:sampleType a rdf:Property ;
    rdfs:label "sampleType" ;
    rdfs:comment "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text ;
    schema:supersededBy schema:codeSampleType .

schema:saturatedFatContent a rdf:Property ;
    rdfs:label "saturatedFatContent" ;
    rdfs:comment "The number of grams of saturated fat." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:scheduleTimezone a rdf:Property ;
    rdfs:label "scheduleTimezone" ;
    rdfs:comment "Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database." ;
    schema:domainIncludes schema:Schedule ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457> .

schema:scheduledPaymentDate a rdf:Property ;
    rdfs:label "scheduledPaymentDate" ;
    rdfs:comment "The date the invoice is scheduled to be paid." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:Date .

schema:scheduledTime a rdf:Property ;
    rdfs:label "scheduledTime" ;
    rdfs:comment "The time the object is scheduled to." ;
    schema:domainIncludes schema:PlanAction ;
    schema:rangeIncludes schema:DateTime .

schema:schemaVersion a rdf:Property ;
    rdfs:label "schemaVersion" ;
    rdfs:comment """Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
    indicate the use of a specific schema.org release, e.g. \`\`\`10.0\`\`\` as a simple string, or more explicitly via URL, \`\`\`https://schema.org/docs/releases.html#v10.0\`\`\`. There may be situations in which other schemas might usefully be referenced this way, e.g. \`\`\`http://dublincore.org/specifications/dublin-core/dces/1999-07-02/\`\`\` but this has not been carefully explored in the community.""" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:schoolClosuresInfo a rdf:Property ;
    rdfs:label "schoolClosuresInfo" ;
    rdfs:comment "Information about school closures." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:screenCount a rdf:Property ;
    rdfs:label "screenCount" ;
    rdfs:comment "The number of screens in the movie theater." ;
    schema:domainIncludes schema:MovieTheater ;
    schema:rangeIncludes schema:Number .

schema:screenshot a rdf:Property ;
    rdfs:label "screenshot" ;
    rdfs:comment "A link to a screenshot image of the app." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL .

schema:sdDatePublished a rdf:Property ;
    rdfs:label "sdDatePublished" ;
    rdfs:comment "Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]]" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Date ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1886> .

schema:sdLicense a rdf:Property ;
    rdfs:label "sdLicense" ;
    rdfs:comment "A license document that applies to this structured data, typically indicated by URL." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1886> .

schema:sdPublisher a rdf:Property ;
    rdfs:label "sdPublisher" ;
    rdfs:comment """Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
[[sdPublisher]] property helps make such practices more explicit.""" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1886> .

schema:seasonNumber a rdf:Property ;
    rdfs:label "seasonNumber" ;
    rdfs:comment "Position of the season within an ordered group of seasons." ;
    rdfs:subPropertyOf schema:position ;
    schema:domainIncludes schema:CreativeWorkSeason ;
    schema:rangeIncludes schema:Integer,
        schema:Text .

schema:seasons a rdf:Property ;
    rdfs:label "seasons" ;
    rdfs:comment "A season in a media series." ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason ;
    schema:supersededBy schema:season .

schema:seatNumber a rdf:Property ;
    rdfs:label "seatNumber" ;
    rdfs:comment "The location of the reserved seat (e.g., 27)." ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text .

schema:seatRow a rdf:Property ;
    rdfs:label "seatRow" ;
    rdfs:comment "The row location of the reserved seat (e.g., B)." ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text .

schema:seatSection a rdf:Property ;
    rdfs:label "seatSection" ;
    rdfs:comment "The section location of the reserved seat (e.g. Orchestra)." ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:Text .

schema:seatingCapacity a rdf:Property ;
    rdfs:label "seatingCapacity" ;
    rdfs:comment "The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\\\\n\\\\nTypical unit code(s): C62 for persons " ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:seatingType a rdf:Property ;
    rdfs:label "seatingType" ;
    rdfs:comment "The type/class of the seat." ;
    schema:domainIncludes schema:Seat ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text .

schema:secondaryPrevention a rdf:Property ;
    rdfs:label "secondaryPrevention" ;
    rdfs:comment "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTherapy .

schema:securityClearanceRequirement a rdf:Property ;
    rdfs:label "securityClearanceRequirement" ;
    rdfs:comment "A description of any security clearance requirements of the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2384> .

schema:securityScreening a rdf:Property ;
    rdfs:label "securityScreening" ;
    rdfs:comment "The type of security screening the passenger is subject to." ;
    schema:domainIncludes schema:FlightReservation ;
    schema:rangeIncludes schema:Text .

schema:seeks a rdf:Property ;
    rdfs:label "seeks" ;
    rdfs:comment "A pointer to products or services sought by the organization or person (demand)." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Demand ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:sender a rdf:Property ;
    rdfs:label "sender" ;
    rdfs:comment "A sub property of participant. The participant who is at the sending end of the action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:Message,
        schema:ReceiveAction ;
    schema:rangeIncludes schema:Audience,
        schema:Organization,
        schema:Person .

schema:sensoryRequirement a rdf:Property ;
    rdfs:label "sensoryRequirement" ;
    rdfs:comment "A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2384> .

schema:sensoryUnit a rdf:Property ;
    rdfs:label "sensoryUnit" ;
    rdfs:comment "The neurological pathway extension that inputs and sends information to the brain or spinal cord." ;
    schema:domainIncludes schema:Nerve ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure,
        schema:SuperficialAnatomy .

schema:seriousAdverseOutcome a rdf:Property ;
    rdfs:label "seriousAdverseOutcome" ;
    rdfs:comment "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition." ;
    schema:domainIncludes schema:MedicalDevice,
        schema:MedicalTherapy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:serverStatus a rdf:Property ;
    rdfs:label "serverStatus" ;
    rdfs:comment "Status of a game server." ;
    schema:domainIncludes schema:GameServer ;
    schema:rangeIncludes schema:GameServerStatus .

schema:servesCuisine a rdf:Property ;
    rdfs:label "servesCuisine" ;
    rdfs:comment "The cuisine of the restaurant." ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Text .

schema:serviceAudience a rdf:Property ;
    rdfs:label "serviceAudience" ;
    rdfs:comment "The audience eligible for this service." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Audience ;
    schema:supersededBy schema:audience .

schema:serviceLocation a rdf:Property ;
    rdfs:label "serviceLocation" ;
    rdfs:comment "The location (e.g. civic structure, local business, etc.) where a person can go to access the service." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:Place .

schema:serviceOperator a rdf:Property ;
    rdfs:label "serviceOperator" ;
    rdfs:comment "The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor." ;
    schema:domainIncludes schema:GovernmentService ;
    schema:rangeIncludes schema:Organization .

schema:servicePhone a rdf:Property ;
    rdfs:label "servicePhone" ;
    rdfs:comment "The phone number to use to access the service." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:ContactPoint .

schema:servicePostalAddress a rdf:Property ;
    rdfs:label "servicePostalAddress" ;
    rdfs:comment "The address for accessing the service by mail." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:PostalAddress .

schema:serviceSmsNumber a rdf:Property ;
    rdfs:label "serviceSmsNumber" ;
    rdfs:comment "The number to access the service by text message." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:ContactPoint .

schema:serviceType a rdf:Property ;
    rdfs:label "serviceType" ;
    rdfs:comment "The type of service being offered, e.g. veterans' benefits, emergency relief, etc." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:GovernmentBenefitsType,
        schema:Text .

schema:serviceUrl a rdf:Property ;
    rdfs:label "serviceUrl" ;
    rdfs:comment "The website to access the service." ;
    schema:domainIncludes schema:ServiceChannel ;
    schema:rangeIncludes schema:URL .

schema:servingSize a rdf:Property ;
    rdfs:label "servingSize" ;
    rdfs:comment "The serving size, in terms of the number of volume or mass." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Text .

schema:sharedContent a rdf:Property ;
    rdfs:label "sharedContent" ;
    rdfs:comment "A CreativeWork such as an image, video, or audio clip shared as part of this posting." ;
    schema:domainIncludes schema:SocialMediaPosting ;
    schema:rangeIncludes schema:CreativeWork .

schema:shippingDestination a rdf:Property ;
    rdfs:label "shippingDestination" ;
    rdfs:comment "indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges." ;
    schema:domainIncludes schema:DeliveryTimeSettings,
        schema:OfferShippingDetails,
        schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedRegion ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:shippingDetails a rdf:Property ;
    rdfs:label "shippingDetails" ;
    rdfs:comment "Indicates information about the shipping policies and options associated with an [[Offer]]." ;
    schema:domainIncludes schema:Offer ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:OfferShippingDetails ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:shippingLabel a rdf:Property ;
    rdfs:label "shippingLabel" ;
    rdfs:comment "Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference)." ;
    schema:domainIncludes schema:OfferShippingDetails,
        schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:shippingRate a rdf:Property ;
    rdfs:label "shippingRate" ;
    rdfs:comment "The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate." ;
    schema:domainIncludes schema:OfferShippingDetails,
        schema:ShippingRateSettings ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmount ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:shippingSettingsLink a rdf:Property ;
    rdfs:label "shippingSettingsLink" ;
    rdfs:comment "Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details." ;
    schema:domainIncludes schema:OfferShippingDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:siblings a rdf:Property ;
    rdfs:label "siblings" ;
    rdfs:comment "A sibling of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person ;
    schema:supersededBy schema:sibling .

schema:signDetected a rdf:Property ;
    rdfs:label "signDetected" ;
    rdfs:comment "A sign detected by the test." ;
    schema:domainIncludes schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalSign .

schema:signOrSymptom a rdf:Property ;
    rdfs:label "signOrSymptom" ;
    rdfs:comment "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalSignOrSymptom .

schema:significance a rdf:Property ;
    rdfs:label "significance" ;
    rdfs:comment "The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment." ;
    schema:domainIncludes schema:SuperficialAnatomy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:significantLinks a rdf:Property ;
    rdfs:label "significantLinks" ;
    rdfs:comment "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL ;
    schema:supersededBy schema:significantLink .

schema:size a rdf:Property ;
    rdfs:label "size" ;
    rdfs:comment "A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. " ;
    schema:domainIncludes schema:CreativeWork,
        schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:QuantitativeValue,
        schema:SizeSpecification,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:sizeGroup a rdf:Property ;
    rdfs:label "sizeGroup" ;
    rdfs:comment "The size group (also known as \\"size type\\") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example \\"men's big and tall\\", \\"petite maternity\\" or \\"regular\\"" ;
    schema:domainIncludes schema:SizeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:SizeGroupEnumeration,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:sizeSystem a rdf:Property ;
    rdfs:label "sizeSystem" ;
    rdfs:comment "The size system used to identify a product's size. Typically either a standard (for example, \\"GS1\\" or \\"ISO-EN13402\\"), country code (for example \\"US\\" or \\"JP\\"), or a measuring system (for example \\"Metric\\" or \\"Imperial\\")." ;
    schema:domainIncludes schema:SizeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:SizeSystemEnumeration,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:skills a rdf:Property ;
    rdfs:label "skills" ;
    rdfs:comment "A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation." ;
    schema:domainIncludes schema:JobPosting,
        schema:Occupation ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1698>,
        <https://github.com/schemaorg/schemaorg/issues/2322> .

schema:sku a rdf:Property ;
    rdfs:label "sku" ;
    rdfs:comment "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:slogan a rdf:Property ;
    rdfs:label "slogan" ;
    rdfs:comment "A slogan or motto associated with the item." ;
    schema:domainIncludes schema:Brand,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Text .

schema:smokingAllowed a rdf:Property ;
    rdfs:label "smokingAllowed" ;
    rdfs:comment "Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:sodiumContent a rdf:Property ;
    rdfs:label "sodiumContent" ;
    rdfs:comment "The number of milligrams of sodium." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:softwareAddOn a rdf:Property ;
    rdfs:label "softwareAddOn" ;
    rdfs:comment "Additional content for a software application." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:SoftwareApplication .

schema:softwareHelp a rdf:Property ;
    rdfs:label "softwareHelp" ;
    rdfs:comment "Software application help." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:CreativeWork .

schema:softwareVersion a rdf:Property ;
    rdfs:label "softwareVersion" ;
    rdfs:comment "Version of the software instance." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:sourceOrganization a rdf:Property ;
    rdfs:label "sourceOrganization" ;
    rdfs:comment "The Organization on whose behalf the creator was working." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Organization .

schema:sourcedFrom a rdf:Property ;
    rdfs:label "sourcedFrom" ;
    rdfs:comment "The neurological pathway that originates the neurons." ;
    schema:domainIncludes schema:Nerve ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:BrainStructure .

schema:spatial a rdf:Property ;
    rdfs:label "spatial" ;
    rdfs:comment """The "spatial" property can be used in cases when more specific properties
(e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.""" ;
    ns2:equivalentProperty <http://purl.org/dc/terms/spatial> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place .

schema:speakable a rdf:Property ;
    rdfs:label "speakable" ;
    rdfs:comment """Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.

The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:

1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.

2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.

3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.


For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
         """ ;
    schema:domainIncludes schema:Article,
        schema:WebPage ;
    schema:rangeIncludes schema:SpeakableSpecification,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1389> .

schema:specialCommitments a rdf:Property ;
    rdfs:label "specialCommitments" ;
    rdfs:comment "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:specialOpeningHoursSpecification a rdf:Property ;
    rdfs:label "specialOpeningHoursSpecification" ;
    rdfs:comment """The special opening hours of a certain place.\\\\n\\\\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
      """ ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:OpeningHoursSpecification .

schema:specialty a rdf:Property ;
    rdfs:label "specialty" ;
    rdfs:comment "One of the domain specialities to which this web page's content applies." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:Specialty .

schema:speechToTextMarkup a rdf:Property ;
    rdfs:label "speechToTextMarkup" ;
    rdfs:comment "Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898)." ;
    schema:domainIncludes schema:PronounceableText ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2108> .

schema:speed a rdf:Property ;
    rdfs:label "speed" ;
    rdfs:comment "The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]] should be the maximum speed achievable under regular conditions.\\\\n\\\\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\\\\n\\\\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\\\\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:spokenByCharacter a rdf:Property ;
    rdfs:label "spokenByCharacter" ;
    rdfs:comment "The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork." ;
    schema:domainIncludes schema:Quotation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/271> .

schema:sport a rdf:Property ;
    rdfs:label "sport" ;
    rdfs:comment "A type of sport (e.g. Baseball)." ;
    schema:domainIncludes schema:SportsEvent,
        schema:SportsOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1951> .

schema:sportsActivityLocation a rdf:Property ;
    rdfs:label "sportsActivityLocation" ;
    rdfs:comment "A sub property of location. The sports activity location where this action occurred." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsActivityLocation .

schema:sportsEvent a rdf:Property ;
    rdfs:label "sportsEvent" ;
    rdfs:comment "A sub property of location. The sports event where this action occurred." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsEvent .

schema:sportsTeam a rdf:Property ;
    rdfs:label "sportsTeam" ;
    rdfs:comment "A sub property of participant. The sports team that participated on this action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:SportsTeam .

schema:spouse a rdf:Property ;
    rdfs:label "spouse" ;
    rdfs:comment "The person's spouse." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:stage a rdf:Property ;
    rdfs:label "stage" ;
    rdfs:comment "The stage of the condition, if applicable." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalConditionStage .

schema:stageAsNumber a rdf:Property ;
    rdfs:label "stageAsNumber" ;
    rdfs:comment "The stage represented as a number, e.g. 3." ;
    schema:domainIncludes schema:MedicalConditionStage ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Number .

schema:starRating a rdf:Property ;
    rdfs:label "starRating" ;
    rdfs:comment "An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars)." ;
    schema:domainIncludes schema:FoodEstablishment,
        schema:LodgingBusiness ;
    schema:rangeIncludes schema:Rating ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:startDate a rdf:Property ;
    rdfs:label "startDate" ;
    rdfs:comment "The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601))." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:CreativeWorkSeries,
        schema:DatedMoneySpecification,
        schema:EducationalOccupationalProgram,
        schema:Event,
        schema:Role,
        schema:Schedule ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2486> .

schema:startOffset a rdf:Property ;
    rdfs:label "startOffset" ;
    rdfs:comment "The start time of the clip expressed as the number of seconds from the beginning of the work." ;
    schema:domainIncludes schema:Clip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HyperTocEntry,
        schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2021> .

schema:startTime a rdf:Property ;
    rdfs:label "startTime" ;
    rdfs:comment "The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\\\\n\\\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions." ;
    schema:domainIncludes schema:Action,
        schema:FoodEstablishmentReservation,
        schema:MediaObject,
        schema:Schedule ;
    schema:rangeIncludes schema:DateTime,
        schema:Time ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2493> .

schema:status a rdf:Property ;
    rdfs:label "status" ;
    rdfs:comment "The status of the study (enumerated)." ;
    schema:domainIncludes schema:MedicalCondition,
        schema:MedicalProcedure,
        schema:MedicalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:EventStatusType,
        schema:MedicalStudyStatus,
        schema:Text .

schema:steeringPosition a rdf:Property ;
    rdfs:label "steeringPosition" ;
    rdfs:comment "The position of the steering wheel or similar device (mostly for cars)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:SteeringPositionValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:stepValue a rdf:Property ;
    rdfs:label "stepValue" ;
    rdfs:comment "The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number .

schema:steps a rdf:Property ;
    rdfs:label "steps" ;
    rdfs:comment "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred)." ;
    schema:domainIncludes schema:HowTo,
        schema:HowToSection ;
    schema:rangeIncludes schema:CreativeWork,
        schema:ItemList,
        schema:Text ;
    schema:supersededBy schema:step .

schema:storageRequirements a rdf:Property ;
    rdfs:label "storageRequirements" ;
    rdfs:comment "Storage requirements (free space required)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:streetAddress a rdf:Property ;
    rdfs:label "streetAddress" ;
    rdfs:comment "The street address. For example, 1600 Amphitheatre Pkwy." ;
    schema:domainIncludes schema:PostalAddress ;
    schema:rangeIncludes schema:Text .

schema:strengthUnit a rdf:Property ;
    rdfs:label "strengthUnit" ;
    rdfs:comment "The units of an active ingredient's strength, e.g. mg." ;
    schema:domainIncludes schema:DrugStrength ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:strengthValue a rdf:Property ;
    rdfs:label "strengthValue" ;
    rdfs:comment "The value of an active ingredient's strength, e.g. 325." ;
    schema:domainIncludes schema:DrugStrength ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Number .

schema:structuralClass a rdf:Property ;
    rdfs:label "structuralClass" ;
    rdfs:comment "The name given to how bone physically connects to each other." ;
    schema:domainIncludes schema:Joint ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:study a rdf:Property ;
    rdfs:label "study" ;
    rdfs:comment "A medical study or trial related to this entity." ;
    schema:domainIncludes schema:MedicalEntity ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalStudy .

schema:studyDesign a rdf:Property ;
    rdfs:label "studyDesign" ;
    rdfs:comment "Specifics about the observational study design (enumerated)." ;
    schema:domainIncludes schema:MedicalObservationalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalObservationalStudyDesign .

schema:studyLocation a rdf:Property ;
    rdfs:label "studyLocation" ;
    rdfs:comment "The location in which the study is taking/took place." ;
    schema:domainIncludes schema:MedicalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea .

schema:studySubject a rdf:Property ;
    rdfs:label "studySubject" ;
    rdfs:comment "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study." ;
    schema:domainIncludes schema:MedicalStudy ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalEntity .

schema:subEvents a rdf:Property ;
    rdfs:label "subEvents" ;
    rdfs:comment "Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Event ;
    schema:supersededBy schema:subEvent .

schema:subReservation a rdf:Property ;
    rdfs:label "subReservation" ;
    rdfs:comment "The individual reservations included in the package. Typically a repeated property." ;
    schema:domainIncludes schema:ReservationPackage ;
    schema:rangeIncludes schema:Reservation .

schema:subStageSuffix a rdf:Property ;
    rdfs:label "subStageSuffix" ;
    rdfs:comment "The substage, e.g. 'a' for Stage IIIa." ;
    schema:domainIncludes schema:MedicalConditionStage ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:subStructure a rdf:Property ;
    rdfs:label "subStructure" ;
    rdfs:comment "Component (sub-)structure(s) that comprise this anatomical structure." ;
    schema:domainIncludes schema:AnatomicalStructure ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:subTest a rdf:Property ;
    rdfs:label "subTest" ;
    rdfs:comment "A component test of the panel." ;
    schema:domainIncludes schema:MedicalTestPanel ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTest .

schema:subtitleLanguage a rdf:Property ;
    rdfs:label "subtitleLanguage" ;
    rdfs:comment "Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47)." ;
    schema:domainIncludes schema:BroadcastEvent,
        schema:Movie,
        schema:ScreeningEvent,
        schema:TVEpisode ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2110> .

schema:successorOf a rdf:Property ;
    rdfs:label "successorOf" ;
    rdfs:comment "A pointer from a newer variant of a product  to its previous, often discontinued predecessor." ;
    schema:domainIncludes schema:ProductModel ;
    schema:rangeIncludes schema:ProductModel ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:sugarContent a rdf:Property ;
    rdfs:label "sugarContent" ;
    rdfs:comment "The number of grams of sugar." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:suggestedAge a rdf:Property ;
    rdfs:label "suggestedAge" ;
    rdfs:comment "The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers." ;
    schema:domainIncludes schema:PeopleAudience,
        schema:SizeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:suggestedGender a rdf:Property ;
    rdfs:label "suggestedGender" ;
    rdfs:comment "The suggested gender of the intended person or audience, for example \\"male\\", \\"female\\", or \\"unisex\\"." ;
    schema:domainIncludes schema:PeopleAudience,
        schema:SizeSpecification ;
    schema:rangeIncludes schema:GenderType,
        schema:Text .

schema:suggestedMaxAge a rdf:Property ;
    rdfs:label "suggestedMaxAge" ;
    rdfs:comment "Maximum recommended age in years for the audience or user." ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Number .

schema:suggestedMeasurement a rdf:Property ;
    rdfs:label "suggestedMeasurement" ;
    rdfs:comment "A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products." ;
    schema:domainIncludes schema:PeopleAudience,
        schema:SizeSpecification ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2811> .

schema:suggestedMinAge a rdf:Property ;
    rdfs:label "suggestedMinAge" ;
    rdfs:comment "Minimum recommended age in years for the audience or user." ;
    schema:domainIncludes schema:PeopleAudience ;
    schema:rangeIncludes schema:Number .

schema:suitableForDiet a rdf:Property ;
    rdfs:label "suitableForDiet" ;
    rdfs:comment "Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc." ;
    schema:domainIncludes schema:MenuItem,
        schema:Recipe ;
    schema:rangeIncludes schema:RestrictedDiet .

schema:supersededBy a rdf:Property ;
    rdfs:label "supersededBy" ;
    rdfs:comment "Relates a term (i.e. a property, class or enumeration) to one that supersedes it." ;
    schema:domainIncludes schema:Class,
        schema:Enumeration,
        schema:Property ;
    schema:isPartOf <https://meta.schema.org> ;
    schema:rangeIncludes schema:Class,
        schema:Enumeration,
        schema:Property .

schema:supplyTo a rdf:Property ;
    rdfs:label "supplyTo" ;
    rdfs:comment "The area to which the artery supplies blood." ;
    schema:domainIncludes schema:Artery ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:supportingData a rdf:Property ;
    rdfs:label "supportingData" ;
    rdfs:comment "Supporting data for a SoftwareApplication." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:DataFeed .

schema:surface a rdf:Property ;
    rdfs:label "surface" ;
    rdfs:comment "A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc." ;
    rdfs:subPropertyOf schema:material ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:supersededBy schema:artworkSurface .

schema:target a rdf:Property ;
    rdfs:label "target" ;
    rdfs:comment "Indicates a target EntryPoint for an Action." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:EntryPoint .

schema:targetDescription a rdf:Property ;
    rdfs:label "targetDescription" ;
    rdfs:comment "The description of a node in an established educational framework." ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text .

schema:targetName a rdf:Property ;
    rdfs:label "targetName" ;
    rdfs:comment "The name of a node in an established educational framework." ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:Text .

schema:targetPlatform a rdf:Property ;
    rdfs:label "targetPlatform" ;
    rdfs:comment "Type of app development: phone, Metro style, desktop, XBox, etc." ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text .

schema:targetPopulation a rdf:Property ;
    rdfs:label "targetPopulation" ;
    rdfs:comment "Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'." ;
    schema:domainIncludes schema:DietarySupplement,
        schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:targetProduct a rdf:Property ;
    rdfs:label "targetProduct" ;
    rdfs:comment "Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:SoftwareApplication .

schema:targetUrl a rdf:Property ;
    rdfs:label "targetUrl" ;
    rdfs:comment "The URL of a node in an established educational framework." ;
    schema:domainIncludes schema:AlignmentObject ;
    schema:rangeIncludes schema:URL .

schema:taxID a rdf:Property ;
    rdfs:label "taxID" ;
    rdfs:comment "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:teaches a rdf:Property ;
    rdfs:label "teaches" ;
    rdfs:comment "The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term." ;
    schema:domainIncludes schema:CreativeWork,
        schema:EducationEvent,
        schema:LearningResource ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2427> .

schema:telephone a rdf:Property ;
    rdfs:label "telephone" ;
    rdfs:comment "The telephone number." ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Person,
        schema:Place ;
    schema:rangeIncludes schema:Text .

schema:temporal a rdf:Property ;
    rdfs:label "temporal" ;
    rdfs:comment """The "temporal" property can be used in cases where more specific properties
(e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.""" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:DateTime,
        schema:Text .

schema:termDuration a rdf:Property ;
    rdfs:label "termDuration" ;
    rdfs:comment "The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:termsOfService a rdf:Property ;
    rdfs:label "termsOfService" ;
    rdfs:comment "Human-readable terms of service documentation." ;
    schema:domainIncludes schema:Service ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1423> .

schema:termsPerYear a rdf:Property ;
    rdfs:label "termsPerYear" ;
    rdfs:comment "The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:text a rdf:Property ;
    rdfs:label "text" ;
    rdfs:comment "The textual content of this CreativeWork." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Text .

schema:textValue a rdf:Property ;
    rdfs:label "textValue" ;
    rdfs:comment "Text value being annotated." ;
    schema:domainIncludes schema:PronounceableText ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2108> .

schema:thumbnail a rdf:Property ;
    rdfs:label "thumbnail" ;
    rdfs:comment "Thumbnail image for an image or video." ;
    schema:domainIncludes schema:ImageObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:ImageObject .

schema:thumbnailUrl a rdf:Property ;
    rdfs:label "thumbnailUrl" ;
    rdfs:comment "A thumbnail image relevant to the Thing." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:URL .

schema:tickerSymbol a rdf:Property ;
    rdfs:label "tickerSymbol" ;
    rdfs:comment "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022." ;
    schema:domainIncludes schema:Corporation ;
    schema:rangeIncludes schema:Text .

schema:ticketNumber a rdf:Property ;
    rdfs:label "ticketNumber" ;
    rdfs:comment "The unique identifier for the ticket." ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Text .

schema:ticketToken a rdf:Property ;
    rdfs:label "ticketToken" ;
    rdfs:comment "Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance." ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:ticketedSeat a rdf:Property ;
    rdfs:label "ticketedSeat" ;
    rdfs:comment "The seat associated with the ticket." ;
    schema:domainIncludes schema:Ticket ;
    schema:rangeIncludes schema:Seat .

schema:timeOfDay a rdf:Property ;
    rdfs:label "timeOfDay" ;
    rdfs:comment "The time of day the program normally runs. For example, \\"evenings\\"." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:timeRequired a rdf:Property ;
    rdfs:label "timeRequired" ;
    rdfs:comment "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Duration .

schema:timeToComplete a rdf:Property ;
    rdfs:label "timeToComplete" ;
    rdfs:comment "The expected length of time to complete the program if attending full-time." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Duration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:tissueSample a rdf:Property ;
    rdfs:label "tissueSample" ;
    rdfs:comment "The type of tissue sample required for the test." ;
    schema:domainIncludes schema:PathologyTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:title a rdf:Property ;
    rdfs:label "title" ;
    rdfs:comment "The title of the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:titleEIDR a rdf:Property ;
    rdfs:label "titleEIDR" ;
    rdfs:comment """An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.

For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].

Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
""" ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Movie,
        schema:TVEpisode ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2469> .

schema:toLocation a rdf:Property ;
    rdfs:label "toLocation" ;
    rdfs:comment "A sub property of location. The final location of the object or the agent after the action." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction,
        schema:InsertAction,
        schema:MoveAction,
        schema:TransferAction ;
    schema:rangeIncludes schema:Place .

schema:toRecipient a rdf:Property ;
    rdfs:label "toRecipient" ;
    rdfs:comment "A sub property of recipient. The recipient who was directly sent the message." ;
    rdfs:subPropertyOf schema:recipient ;
    schema:domainIncludes schema:Message ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person .

schema:tocContinuation a rdf:Property ;
    rdfs:label "tocContinuation" ;
    rdfs:comment "A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render." ;
    schema:domainIncludes schema:HyperTocEntry ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HyperTocEntry ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2766> .

schema:tocEntry a rdf:Property ;
    rdfs:label "tocEntry" ;
    rdfs:comment "Indicates a [[HyperTocEntry]] in a [[HyperToc]]." ;
    rdfs:subPropertyOf schema:hasPart ;
    schema:domainIncludes schema:HyperToc ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:HyperTocEntry ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2766> .

schema:tongueWeight a rdf:Property ;
    rdfs:label "tongueWeight" ;
    rdfs:comment "The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)\\\\n\\\\nTypical unit code(s): KGM for kilogram, LBR for pound\\\\n\\\\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\\\\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\\\\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:tool a rdf:Property ;
    rdfs:label "tool" ;
    rdfs:comment "A sub property of instrument. An object used (but not consumed) when performing instructions or a direction." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:HowToTool,
        schema:Text .

schema:torque a rdf:Property ;
    rdfs:label "torque" ;
    rdfs:comment "The torque (turning force) of the vehicle's engine.\\\\n\\\\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\\\\n\\\\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\\\\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:EngineSpecification ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:totalJobOpenings a rdf:Property ;
    rdfs:label "totalJobOpenings" ;
    rdfs:comment "The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known." ;
    schema:domainIncludes schema:JobPosting ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2329> .

schema:totalPaymentDue a rdf:Property ;
    rdfs:label "totalPaymentDue" ;
    rdfs:comment "The total amount due." ;
    schema:domainIncludes schema:Invoice ;
    schema:rangeIncludes schema:MonetaryAmount,
        schema:PriceSpecification .

schema:totalPrice a rdf:Property ;
    rdfs:label "totalPrice" ;
    rdfs:comment "The total price for the reservation or ticket, including applicable taxes, shipping, etc.\\\\n\\\\nUsage guidelines:\\\\n\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." ;
    schema:domainIncludes schema:Reservation,
        schema:Ticket ;
    schema:rangeIncludes schema:Number,
        schema:PriceSpecification,
        schema:Text .

schema:totalTime a rdf:Property ;
    rdfs:label "totalTime" ;
    rdfs:comment "The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)." ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration .

schema:tourBookingPage a rdf:Property ;
    rdfs:label "tourBookingPage" ;
    rdfs:comment "A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate." ;
    schema:domainIncludes schema:Accommodation,
        schema:ApartmentComplex,
        schema:Place ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:touristType a rdf:Property ;
    rdfs:label "touristType" ;
    rdfs:comment "Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. " ;
    schema:domainIncludes schema:TouristAttraction,
        schema:TouristDestination,
        schema:TouristTrip ;
    schema:rangeIncludes schema:Audience,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it>,
        <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism> .

schema:trackingNumber a rdf:Property ;
    rdfs:label "trackingNumber" ;
    rdfs:comment "Shipper tracking number." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:Text .

schema:trackingUrl a rdf:Property ;
    rdfs:label "trackingUrl" ;
    rdfs:comment "Tracking url for the parcel delivery." ;
    schema:domainIncludes schema:ParcelDelivery ;
    schema:rangeIncludes schema:URL .

schema:tracks a rdf:Property ;
    rdfs:label "tracks" ;
    rdfs:comment "A music recording (track)&#x2014;usually a single song." ;
    schema:domainIncludes schema:MusicGroup,
        schema:MusicPlaylist ;
    schema:rangeIncludes schema:MusicRecording ;
    schema:supersededBy schema:track .

schema:trailer a rdf:Property ;
    rdfs:label "trailer" ;
    rdfs:comment "The trailer of a movie or tv/radio series, season, episode, etc." ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:Episode,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:VideoObject .

schema:trailerWeight a rdf:Property ;
    rdfs:label "trailerWeight" ;
    rdfs:comment "The permitted weight of a trailer attached to the vehicle.\\\\n\\\\nTypical unit code(s): KGM for kilogram, LBR for pound\\\\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\\\\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\\\\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:trainName a rdf:Property ;
    rdfs:label "trainName" ;
    rdfs:comment "The name of the train (e.g. The Orient Express)." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text .

schema:trainNumber a rdf:Property ;
    rdfs:label "trainNumber" ;
    rdfs:comment "The unique identifier for the train." ;
    schema:domainIncludes schema:TrainTrip ;
    schema:rangeIncludes schema:Text .

schema:trainingSalary a rdf:Property ;
    rdfs:label "trainingSalary" ;
    rdfs:comment "The estimated salary earned while in the program." ;
    schema:domainIncludes schema:EducationalOccupationalProgram,
        schema:WorkBasedProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:MonetaryAmountDistribution ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289>,
        <https://github.com/schemaorg/schemaorg/issues/2460> .

schema:transFatContent a rdf:Property ;
    rdfs:label "transFatContent" ;
    rdfs:comment "The number of grams of trans fat." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:transcript a rdf:Property ;
    rdfs:label "transcript" ;
    rdfs:comment "If this MediaObject is an AudioObject or VideoObject, the transcript of that object." ;
    schema:domainIncludes schema:AudioObject,
        schema:VideoObject ;
    schema:rangeIncludes schema:Text .

schema:transitTime a rdf:Property ;
    rdfs:label "transitTime" ;
    rdfs:comment "The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY)." ;
    schema:domainIncludes schema:ShippingDeliveryTime ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:transitTimeLabel a rdf:Property ;
    rdfs:label "transitTimeLabel" ;
    rdfs:comment "Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference)." ;
    schema:domainIncludes schema:DeliveryTimeSettings,
        schema:OfferShippingDetails ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2506> .

schema:translator a rdf:Property ;
    rdfs:label "translator" ;
    rdfs:comment "Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:transmissionMethod a rdf:Property ;
    rdfs:label "transmissionMethod" ;
    rdfs:comment "How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc." ;
    schema:domainIncludes schema:InfectiousDisease ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:travelBans a rdf:Property ;
    rdfs:label "travelBans" ;
    rdfs:comment "Information about travel bans, e.g. in the context of a pandemic." ;
    schema:domainIncludes schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:URL,
        schema:WebContent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:trialDesign a rdf:Property ;
    rdfs:label "trialDesign" ;
    rdfs:comment "Specifics about the trial design (enumerated)." ;
    schema:domainIncludes schema:MedicalTrial ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTrialDesign .

schema:tributary a rdf:Property ;
    rdfs:label "tributary" ;
    rdfs:comment "The anatomical or organ system that the vein flows into; a larger structure that the vein connects to." ;
    schema:domainIncludes schema:Vein ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:typeOfBed a rdf:Property ;
    rdfs:label "typeOfBed" ;
    rdfs:comment "The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity." ;
    schema:domainIncludes schema:BedDetails ;
    schema:rangeIncludes schema:BedType,
        schema:Text ;
    schema:source <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology> .

schema:typeOfGood a rdf:Property ;
    rdfs:label "typeOfGood" ;
    rdfs:comment "The product that this structured value is referring to." ;
    schema:domainIncludes schema:OwnershipInfo,
        schema:TypeAndQuantityNode ;
    schema:rangeIncludes schema:Product,
        schema:Service ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:typicalAgeRange a rdf:Property ;
    rdfs:label "typicalAgeRange" ;
    rdfs:comment "The typical expected age range, e.g. '7-9', '11-'." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event ;
    schema:rangeIncludes schema:Text .

schema:typicalCreditsPerTerm a rdf:Property ;
    rdfs:label "typicalCreditsPerTerm" ;
    rdfs:comment "The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution." ;
    schema:domainIncludes schema:EducationalOccupationalProgram ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Integer,
        schema:StructuredValue ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2419> .

schema:typicalTest a rdf:Property ;
    rdfs:label "typicalTest" ;
    rdfs:comment "A medical test typically performed given this condition." ;
    schema:domainIncludes schema:MedicalCondition ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalTest .

schema:underName a rdf:Property ;
    rdfs:label "underName" ;
    rdfs:comment "The person or organization the reservation or ticket is for." ;
    schema:domainIncludes schema:Reservation,
        schema:Ticket ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:unitCode a rdf:Property ;
    rdfs:label "unitCode" ;
    rdfs:comment "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon." ;
    schema:domainIncludes schema:PropertyValue,
        schema:QuantitativeValue,
        schema:TypeAndQuantityNode,
        schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:unitText a rdf:Property ;
    rdfs:label "unitText" ;
    rdfs:comment """A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
<a href='unitCode'>unitCode</a>.""" ;
    schema:domainIncludes schema:PropertyValue,
        schema:QuantitativeValue,
        schema:TypeAndQuantityNode,
        schema:UnitPriceSpecification ;
    schema:rangeIncludes schema:Text .

schema:unnamedSourcesPolicy a rdf:Property ;
    rdfs:label "unnamedSourcesPolicy" ;
    rdfs:comment "For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization,
        schema:Organization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:unsaturatedFatContent a rdf:Property ;
    rdfs:label "unsaturatedFatContent" ;
    rdfs:comment "The number of grams of unsaturated fat." ;
    schema:domainIncludes schema:NutritionInformation ;
    schema:rangeIncludes schema:Mass .

schema:uploadDate a rdf:Property ;
    rdfs:label "uploadDate" ;
    rdfs:comment "Date when this media object was uploaded to this site." ;
    schema:domainIncludes schema:MediaObject ;
    schema:rangeIncludes schema:Date .

schema:upvoteCount a rdf:Property ;
    rdfs:label "upvoteCount" ;
    rdfs:comment "The number of upvotes this question, answer or comment has received from the community." ;
    schema:domainIncludes schema:Comment ;
    schema:rangeIncludes schema:Integer .

schema:url a rdf:Property ;
    rdfs:label "url" ;
    rdfs:comment "URL of the item." ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:URL .

schema:urlTemplate a rdf:Property ;
    rdfs:label "urlTemplate" ;
    rdfs:comment "An url template (RFC6570) that will be used to construct the target of the execution of the action." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:Text .

schema:usedToDiagnose a rdf:Property ;
    rdfs:label "usedToDiagnose" ;
    rdfs:comment "A condition the test is used to diagnose." ;
    schema:domainIncludes schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalCondition .

schema:userInteractionCount a rdf:Property ;
    rdfs:label "userInteractionCount" ;
    rdfs:comment "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication." ;
    schema:domainIncludes schema:InteractionCounter ;
    schema:rangeIncludes schema:Integer .

schema:usesDevice a rdf:Property ;
    rdfs:label "usesDevice" ;
    rdfs:comment "Device used to perform the test." ;
    schema:domainIncludes schema:MedicalTest ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:MedicalDevice .

schema:usesHealthPlanIdStandard a rdf:Property ;
    rdfs:label "usesHealthPlanIdStandard" ;
    rdfs:comment "The standard for interpreting thePlan ID. The preferred is \\"HIOS\\". See the Centers for Medicare & Medicaid Services for more details." ;
    schema:domainIncludes schema:HealthInsurancePlan ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1062> .

schema:utterances a rdf:Property ;
    rdfs:label "utterances" ;
    rdfs:comment "Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]]." ;
    schema:domainIncludes schema:HyperTocEntry ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2766> .

schema:validFor a rdf:Property ;
    rdfs:label "validFor" ;
    rdfs:comment "The duration of validity of a permit or similar thing." ;
    schema:domainIncludes schema:EducationalOccupationalCredential,
        schema:Permit ;
    schema:rangeIncludes schema:Duration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:validFrom a rdf:Property ;
    rdfs:label "validFrom" ;
    rdfs:comment "The date when the item becomes valid." ;
    schema:domainIncludes schema:Demand,
        schema:LocationFeatureSpecification,
        schema:MonetaryAmount,
        schema:Offer,
        schema:OpeningHoursSpecification,
        schema:Permit,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:validIn a rdf:Property ;
    rdfs:label "validIn" ;
    rdfs:comment "The geographic area where a permit or similar thing is valid." ;
    schema:domainIncludes schema:EducationalOccupationalCredential,
        schema:Permit ;
    schema:rangeIncludes schema:AdministrativeArea ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1779> .

schema:validThrough a rdf:Property ;
    rdfs:label "validThrough" ;
    rdfs:comment "The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours." ;
    schema:domainIncludes schema:Demand,
        schema:JobPosting,
        schema:LocationFeatureSpecification,
        schema:MonetaryAmount,
        schema:Offer,
        schema:OpeningHoursSpecification,
        schema:PriceSpecification ;
    schema:rangeIncludes schema:Date,
        schema:DateTime ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:validUntil a rdf:Property ;
    rdfs:label "validUntil" ;
    rdfs:comment "The date when the item is no longer valid." ;
    schema:domainIncludes schema:Permit ;
    schema:rangeIncludes schema:Date .

schema:value a rdf:Property ;
    rdfs:label "value" ;
    rdfs:comment "The value of the quantitative value or property value node.\\\\n\\\\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\\\\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\\\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\\\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator." ;
    schema:domainIncludes schema:MonetaryAmount,
        schema:PropertyValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:Boolean,
        schema:Number,
        schema:StructuredValue,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:valueAddedTaxIncluded a rdf:Property ;
    rdfs:label "valueAddedTaxIncluded" ;
    rdfs:comment "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not." ;
    schema:domainIncludes schema:PriceSpecification ;
    schema:rangeIncludes schema:Boolean ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:valueMaxLength a rdf:Property ;
    rdfs:label "valueMaxLength" ;
    rdfs:comment "Specifies the allowed range for number of characters in a literal value." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number .

schema:valueMinLength a rdf:Property ;
    rdfs:label "valueMinLength" ;
    rdfs:comment "Specifies the minimum allowed range for number of characters in a literal value." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Number .

schema:valueName a rdf:Property ;
    rdfs:label "valueName" ;
    rdfs:comment "Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text .

schema:valuePattern a rdf:Property ;
    rdfs:label "valuePattern" ;
    rdfs:comment "Specifies a regular expression for testing literal values according to the HTML spec." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Text .

schema:valueReference a rdf:Property ;
    rdfs:label "valueReference" ;
    rdfs:comment "A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement." ;
    schema:domainIncludes schema:PropertyValue,
        schema:QualitativeValue,
        schema:QuantitativeValue ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Enumeration,
        schema:MeasurementTypeEnumeration,
        schema:PropertyValue,
        schema:QualitativeValue,
        schema:QuantitativeValue,
        schema:StructuredValue,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:valueRequired a rdf:Property ;
    rdfs:label "valueRequired" ;
    rdfs:comment "Whether the property must be filled in to complete the action.  Default is false." ;
    schema:domainIncludes schema:PropertyValueSpecification ;
    schema:rangeIncludes schema:Boolean .

schema:variableMeasured a rdf:Property ;
    rdfs:label "variableMeasured" ;
    rdfs:comment "The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue." ;
    schema:domainIncludes schema:Dataset ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:PropertyValue,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1083> .

schema:variantCover a rdf:Property ;
    rdfs:label "variantCover" ;
    rdfs:comment """A description of the variant cover
    	for the issue, if the issue is a variant printing. For example, "Bryan Hitch
    	Variant Cover" or "2nd Printing Variant".""" ;
    schema:domainIncludes schema:ComicIssue ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:variesBy a rdf:Property ;
    rdfs:label "variesBy" ;
    rdfs:comment "Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. \\"color\\"; terms defined elsewhere can be referenced with their URIs." ;
    schema:domainIncludes schema:ProductGroup ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:vatID a rdf:Property ;
    rdfs:label "vatID" ;
    rdfs:comment "The Value-added Tax ID of the organization or person." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:vehicleConfiguration a rdf:Property ;
    rdfs:label "vehicleConfiguration" ;
    rdfs:comment "A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleEngine a rdf:Property ;
    rdfs:label "vehicleEngine" ;
    rdfs:comment "Information about the engine or engines of the vehicle." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:EngineSpecification ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleIdentificationNumber a rdf:Property ;
    rdfs:label "vehicleIdentificationNumber" ;
    rdfs:comment "The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles." ;
    rdfs:subPropertyOf schema:serialNumber ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleInteriorColor a rdf:Property ;
    rdfs:label "vehicleInteriorColor" ;
    rdfs:comment "The color or color combination of the interior of the vehicle." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleInteriorType a rdf:Property ;
    rdfs:label "vehicleInteriorType" ;
    rdfs:comment "The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleModelDate a rdf:Property ;
    rdfs:label "vehicleModelDate" ;
    rdfs:comment "The release date of a vehicle model (often used to differentiate versions of the same make and model)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Date ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleSeatingCapacity a rdf:Property ;
    rdfs:label "vehicleSeatingCapacity" ;
    rdfs:comment "The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\\\\n\\\\nTypical unit code(s): C62 for persons." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:Number,
        schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleSpecialUsage a rdf:Property ;
    rdfs:label "vehicleSpecialUsage" ;
    rdfs:comment "Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:CarUsageType,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vehicleTransmission a rdf:Property ;
    rdfs:label "vehicleTransmission" ;
    rdfs:comment "The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) (\\"gearbox\\" for cars)." ;
    schema:domainIncludes schema:Vehicle ;
    schema:rangeIncludes schema:QualitativeValue,
        schema:Text,
        schema:URL ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:vendor a rdf:Property ;
    rdfs:label "vendor" ;
    rdfs:comment "'vendor' is an earlier term for 'seller'." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:BuyAction ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:supersededBy schema:seller .

schema:verificationFactCheckingPolicy a rdf:Property ;
    rdfs:label "verificationFactCheckingPolicy" ;
    rdfs:comment "Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]]." ;
    rdfs:subPropertyOf schema:publishingPrinciples ;
    schema:domainIncludes schema:NewsMediaOrganization ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1525>,
        <https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP> .

schema:version a rdf:Property ;
    rdfs:label "version" ;
    rdfs:comment "The version of the CreativeWork embodied by a specified resource." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:video a rdf:Property ;
    rdfs:label "video" ;
    rdfs:comment "An embedded video object." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Clip,
        schema:VideoObject .

schema:videoFormat a rdf:Property ;
    rdfs:label "videoFormat" ;
    rdfs:comment "The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.)." ;
    schema:domainIncludes schema:BroadcastEvent,
        schema:BroadcastService,
        schema:ScreeningEvent ;
    schema:rangeIncludes schema:Text .

schema:videoFrameSize a rdf:Property ;
    rdfs:label "videoFrameSize" ;
    rdfs:comment "The frame size of the video." ;
    schema:domainIncludes schema:VideoObject ;
    schema:rangeIncludes schema:Text .

schema:videoQuality a rdf:Property ;
    rdfs:label "videoQuality" ;
    rdfs:comment "The quality of the video." ;
    schema:domainIncludes schema:VideoObject ;
    schema:rangeIncludes schema:Text .

schema:volumeNumber a rdf:Property ;
    rdfs:label "volumeNumber" ;
    rdfs:comment "Identifies the volume of publication or multi-part work; for example, \\"iii\\" or \\"2\\"." ;
    rdfs:subPropertyOf schema:position ;
    ns2:equivalentProperty <http://purl.org/ontology/bibo/volume> ;
    schema:domainIncludes schema:PublicationVolume ;
    schema:rangeIncludes schema:Integer,
        schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:warning a rdf:Property ;
    rdfs:label "warning" ;
    rdfs:comment "Any FDA or other warnings about the drug (text or URL)." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:warrantyPromise a rdf:Property ;
    rdfs:label "warrantyPromise" ;
    rdfs:comment "The warranty promise(s) included in the offer." ;
    schema:domainIncludes schema:BuyAction,
        schema:SellAction ;
    schema:rangeIncludes schema:WarrantyPromise ;
    schema:supersededBy schema:warranty .

schema:warrantyScope a rdf:Property ;
    rdfs:label "warrantyScope" ;
    rdfs:comment "The scope of the warranty promise." ;
    schema:domainIncludes schema:WarrantyPromise ;
    schema:rangeIncludes schema:WarrantyScope ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:webCheckinTime a rdf:Property ;
    rdfs:label "webCheckinTime" ;
    rdfs:comment "The time when a passenger can check into the flight online." ;
    schema:domainIncludes schema:Flight ;
    schema:rangeIncludes schema:DateTime .

schema:webFeed a rdf:Property ;
    rdfs:label "webFeed" ;
    rdfs:comment "The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom." ;
    schema:domainIncludes schema:PodcastSeries,
        schema:SpecialAnnouncement ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DataFeed,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/373> .

schema:weight a rdf:Property ;
    rdfs:label "weight" ;
    rdfs:comment "The weight of the product or person." ;
    schema:domainIncludes schema:Person,
        schema:Product ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:weightTotal a rdf:Property ;
    rdfs:label "weightTotal" ;
    rdfs:comment "The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\\\\n\\\\nTypical unit code(s): KGM for kilogram, LBR for pound\\\\n\\\\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\\\\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\\\\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges." ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:wheelbase a rdf:Property ;
    rdfs:label "wheelbase" ;
    rdfs:comment "The distance between the centers of the front and rear wheels.\\\\n\\\\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet" ;
    schema:domainIncludes schema:Vehicle ;
    schema:isPartOf <https://auto.schema.org> ;
    schema:rangeIncludes schema:QuantitativeValue ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group> .

schema:width a rdf:Property ;
    rdfs:label "width" ;
    rdfs:comment "The width of the item." ;
    schema:domainIncludes schema:MediaObject,
        schema:Product,
        schema:VisualArtwork ;
    schema:rangeIncludes schema:Distance,
        schema:QuantitativeValue .

schema:winner a rdf:Property ;
    rdfs:label "winner" ;
    rdfs:comment "A sub property of participant. The winner of the action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:LoseAction ;
    schema:rangeIncludes schema:Person .

schema:wordCount a rdf:Property ;
    rdfs:label "wordCount" ;
    rdfs:comment "The number of words in the text of the Article." ;
    schema:domainIncludes schema:Article ;
    schema:rangeIncludes schema:Integer .

schema:workHours a rdf:Property ;
    rdfs:label "workHours" ;
    rdfs:comment "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm)." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:workLocation a rdf:Property ;
    rdfs:label "workLocation" ;
    rdfs:comment "A contact location for a person's place of work." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:ContactPoint,
        schema:Place .

schema:workPerformed a rdf:Property ;
    rdfs:label "workPerformed" ;
    rdfs:comment "A work performed in some event, for example a play performed in a TheaterEvent." ;
    rdfs:subPropertyOf schema:workFeatured ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:CreativeWork .

schema:workPresented a rdf:Property ;
    rdfs:label "workPresented" ;
    rdfs:comment "The movie presented during this event." ;
    rdfs:subPropertyOf schema:workFeatured ;
    schema:domainIncludes schema:ScreeningEvent ;
    schema:rangeIncludes schema:Movie .

schema:workload a rdf:Property ;
    rdfs:label "workload" ;
    rdfs:comment "Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure." ;
    schema:domainIncludes schema:ExercisePlan ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Energy,
        schema:QuantitativeValue .

schema:worksFor a rdf:Property ;
    rdfs:label "worksFor" ;
    rdfs:comment "Organizations that the person works for." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Organization .

schema:worstRating a rdf:Property ;
    rdfs:label "worstRating" ;
    rdfs:comment "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed." ;
    schema:domainIncludes schema:Rating ;
    schema:rangeIncludes schema:Number,
        schema:Text .

schema:xpath a rdf:Property ;
    rdfs:label "xpath" ;
    rdfs:comment "An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \\"Web page element\\"." ;
    schema:domainIncludes schema:SpeakableSpecification,
        schema:WebPageElement ;
    schema:rangeIncludes schema:XPathType ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1389> .

schema:yearBuilt a rdf:Property ;
    rdfs:label "yearBuilt" ;
    rdfs:comment "The year an [[Accommodation]] was constructed. This corresponds to the [YearBuilt field in RESO](https://ddwiki.reso.org/display/DDW17/YearBuilt+Field). " ;
    schema:domainIncludes schema:Accommodation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Number ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2373> .

schema:yearlyRevenue a rdf:Property ;
    rdfs:label "yearlyRevenue" ;
    rdfs:comment "The size of the business in annual revenue." ;
    schema:domainIncludes schema:BusinessAudience ;
    schema:rangeIncludes schema:QuantitativeValue .

schema:yearsInOperation a rdf:Property ;
    rdfs:label "yearsInOperation" ;
    rdfs:comment "The age of the business." ;
    schema:domainIncludes schema:BusinessAudience ;
    schema:rangeIncludes schema:QuantitativeValue .

schema:Dermatology a schema:MedicalSpecialty ;
    rdfs:label "Dermatology" ;
    rdfs:comment "A specific branch of medical science that pertains to diagnosis and treatment of disorders of skin." ;
    rdfs:subClassOf schema:MedicalBusiness ;
    schema:isPartOf <https://health-lifesci.schema.org> .

schema:actionApplication a rdf:Property ;
    rdfs:label "actionApplication" ;
    rdfs:comment "An application that can complete the request." ;
    schema:domainIncludes schema:EntryPoint ;
    schema:rangeIncludes schema:SoftwareApplication .

schema:actionOption a rdf:Property ;
    rdfs:label "actionOption" ;
    rdfs:comment "A sub property of object. The options subject to this action." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:ChooseAction ;
    schema:rangeIncludes schema:Text,
        schema:Thing .

schema:album a rdf:Property ;
    rdfs:label "album" ;
    rdfs:comment "A music album." ;
    schema:domainIncludes schema:MusicGroup ;
    schema:rangeIncludes schema:MusicAlbum .

schema:albumRelease a rdf:Property ;
    rdfs:label "albumRelease" ;
    rdfs:comment "A release of this album." ;
    schema:domainIncludes schema:MusicAlbum ;
    schema:inverseOf schema:releaseOf ;
    schema:rangeIncludes schema:MusicRelease .

schema:alumni a rdf:Property ;
    rdfs:label "alumni" ;
    rdfs:comment "Alumni of an organization." ;
    schema:domainIncludes schema:EducationalOrganization,
        schema:Organization ;
    schema:inverseOf schema:alumniOf ;
    schema:rangeIncludes schema:Person .

schema:alumniOf a rdf:Property ;
    rdfs:label "alumniOf" ;
    rdfs:comment "An organization that the person is an alumni of." ;
    schema:domainIncludes schema:Person ;
    schema:inverseOf schema:alumni ;
    schema:rangeIncludes schema:EducationalOrganization,
        schema:Organization .

schema:archiveHeld a rdf:Property ;
    rdfs:label "archiveHeld"@en ;
    rdfs:comment "Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]]."@en ;
    schema:domainIncludes schema:ArchiveOrganization ;
    schema:inverseOf schema:holdingArchive ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ArchiveComponent ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1758> .

schema:arterialBranch a rdf:Property ;
    rdfs:label "arterialBranch" ;
    rdfs:comment "The branches that comprise the arterial structure." ;
    schema:domainIncludes schema:Artery ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:AnatomicalStructure .

schema:artworkSurface a rdf:Property ;
    rdfs:label "artworkSurface" ;
    rdfs:comment "The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc." ;
    schema:domainIncludes schema:VisualArtwork ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:attendee a rdf:Property ;
    rdfs:label "attendee" ;
    rdfs:comment "A person or organization attending the event." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:audience a rdf:Property ;
    rdfs:label "audience" ;
    rdfs:comment "An intended audience, i.e. a group for whom something was created." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:LodgingBusiness,
        schema:PlayAction,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Audience .

schema:availableOnDevice a rdf:Property ;
    rdfs:label "availableOnDevice" ;
    rdfs:comment "Device required to run the application. Used in cases where a specific make/model is required to run the application." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text .

schema:award a rdf:Property ;
    rdfs:label "award" ;
    rdfs:comment "An award won by or for this item." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Text .

schema:blogPost a rdf:Property ;
    rdfs:label "blogPost" ;
    rdfs:comment "A posting that is part of this blog." ;
    schema:domainIncludes schema:Blog ;
    schema:rangeIncludes schema:BlogPosting .

schema:broker a rdf:Property ;
    rdfs:label "broker" ;
    rdfs:comment "An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred." ;
    schema:domainIncludes schema:Invoice,
        schema:Order,
        schema:Reservation,
        schema:Service ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:category a rdf:Property ;
    rdfs:label "category" ;
    rdfs:comment "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy." ;
    schema:domainIncludes schema:ActionAccessSpecification,
        schema:Invoice,
        schema:Offer,
        schema:PhysicalActivity,
        schema:Product,
        schema:Recommendation,
        schema:Service,
        schema:SpecialAnnouncement ;
    schema:rangeIncludes schema:PhysicalActivityCategory,
        schema:Text,
        schema:Thing,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1741>,
        <https://github.com/schemaorg/schemaorg/issues/2490> .

schema:clinicalPharmacology a rdf:Property ;
    rdfs:label "clinicalPharmacology" ;
    rdfs:comment "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD)." ;
    schema:domainIncludes schema:Drug ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:codeSampleType a rdf:Property ;
    rdfs:label "codeSampleType" ;
    rdfs:comment "What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text .

schema:colleague a rdf:Property ;
    rdfs:label "colleague" ;
    rdfs:comment "A colleague of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person,
        schema:URL .

schema:contactPoint a rdf:Property ;
    rdfs:label "contactPoint" ;
    rdfs:comment "A contact point for a person or organization." ;
    schema:domainIncludes schema:HealthInsurancePlan,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:ContactPoint .

schema:containsPlace a rdf:Property ;
    rdfs:label "containsPlace" ;
    rdfs:comment "The basic containment relation between a place and another that it contains." ;
    schema:domainIncludes schema:Place ;
    schema:inverseOf schema:containedInPlace ;
    schema:rangeIncludes schema:Place .

schema:containsSeason a rdf:Property ;
    rdfs:label "containsSeason" ;
    rdfs:comment "A season that is part of the media series." ;
    rdfs:subPropertyOf schema:hasPart ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason .

schema:contentLocation a rdf:Property ;
    rdfs:label "contentLocation" ;
    rdfs:comment "The location depicted or described in the content. For example, the location in a photograph or painting." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place .

schema:creator a rdf:Property ;
    rdfs:label "creator" ;
    rdfs:comment "The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork." ;
    schema:domainIncludes schema:CreativeWork,
        schema:UserComments ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:dataset a rdf:Property ;
    rdfs:label "dataset" ;
    rdfs:comment "A dataset contained in this catalog." ;
    schema:domainIncludes schema:DataCatalog ;
    schema:inverseOf schema:includedInDataCatalog ;
    schema:rangeIncludes schema:Dataset .

schema:dateCreated a rdf:Property ;
    rdfs:label "dateCreated" ;
    rdfs:comment "The date on which the CreativeWork was created or the item was added to a DataFeed." ;
    schema:domainIncludes schema:CreativeWork,
        schema:DataFeedItem ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:description a rdf:Property ;
    rdfs:label "description" ;
    rdfs:comment "A description of the item." ;
    ns2:equivalentProperty <http://purl.org/dc/terms/description> ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:Text .

schema:director a rdf:Property ;
    rdfs:label "director" ;
    rdfs:comment "A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip." ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode,
        schema:Event,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person .

schema:duration a rdf:Property ;
    rdfs:label "duration" ;
    rdfs:comment "The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)." ;
    schema:domainIncludes schema:Audiobook,
        schema:Episode,
        schema:Event,
        schema:MediaObject,
        schema:Movie,
        schema:MusicRecording,
        schema:MusicRelease,
        schema:QuantitativeValueDistribution,
        schema:Schedule ;
    schema:rangeIncludes schema:Duration ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1457>,
        <https://github.com/schemaorg/schemaorg/issues/1698> .

schema:employee a rdf:Property ;
    rdfs:label "employee" ;
    rdfs:comment "Someone working for this organization." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person .

schema:encodesCreativeWork a rdf:Property ;
    rdfs:label "encodesCreativeWork" ;
    rdfs:comment "The CreativeWork encoded by this media object." ;
    schema:domainIncludes schema:MediaObject ;
    schema:inverseOf schema:encoding ;
    schema:rangeIncludes schema:CreativeWork .

schema:encodingFormat a rdf:Property ;
    rdfs:label "encodingFormat" ;
    rdfs:comment """Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).

In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.

Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.""" ;
    schema:domainIncludes schema:CreativeWork,
        schema:MediaObject ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:episode a rdf:Property ;
    rdfs:label "episode" ;
    rdfs:comment "An episode of a tv, radio or game media within a series or season." ;
    rdfs:subPropertyOf schema:hasPart ;
    schema:domainIncludes schema:CreativeWorkSeason,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:Episode .

schema:event a rdf:Property ;
    rdfs:label "event" ;
    rdfs:comment "Upcoming or past event associated with this place, organization, or action." ;
    schema:domainIncludes schema:InformAction,
        schema:InviteAction,
        schema:JoinAction,
        schema:LeaveAction,
        schema:Organization,
        schema:Place,
        schema:PlayAction ;
    schema:rangeIncludes schema:Event .

schema:exampleOfWork a rdf:Property ;
    rdfs:label "exampleOfWork" ;
    rdfs:comment "A creative work that this work is an example/instance/realization/derivation of." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:workExample ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:executableLibraryName a rdf:Property ;
    rdfs:label "executableLibraryName" ;
    rdfs:comment "Library file name e.g., mscorlib.dll, system.web.dll." ;
    schema:domainIncludes schema:APIReference ;
    schema:rangeIncludes schema:Text .

schema:exerciseCourse a rdf:Property ;
    rdfs:label "exerciseCourse" ;
    rdfs:comment "A sub property of location. The course where this action was taken." ;
    rdfs:subPropertyOf schema:location ;
    schema:domainIncludes schema:ExerciseAction ;
    schema:rangeIncludes schema:Place .

schema:founder a rdf:Property ;
    rdfs:label "founder" ;
    rdfs:comment "A person who founded this organization." ;
    schema:domainIncludes schema:Organization ;
    schema:rangeIncludes schema:Person .

schema:frequency a rdf:Property ;
    rdfs:label "frequency" ;
    rdfs:comment "How often the dose is taken, e.g. 'daily'." ;
    schema:domainIncludes schema:DoseSchedule ;
    schema:isPartOf <https://health-lifesci.schema.org> ;
    schema:rangeIncludes schema:Text .

schema:game a rdf:Property ;
    rdfs:label "game" ;
    rdfs:comment "Video game which is played on this server." ;
    schema:domainIncludes schema:GameServer ;
    schema:inverseOf schema:gameServer ;
    schema:rangeIncludes schema:VideoGame .

schema:gameServer a rdf:Property ;
    rdfs:label "gameServer" ;
    rdfs:comment "The server on which  it is possible to play the game." ;
    schema:domainIncludes schema:VideoGame ;
    schema:inverseOf schema:game ;
    schema:rangeIncludes schema:GameServer .

schema:genre a rdf:Property ;
    rdfs:label "genre" ;
    rdfs:comment "Genre of the creative work, broadcast channel or group." ;
    schema:domainIncludes schema:BroadcastChannel,
        schema:CreativeWork,
        schema:MusicGroup ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:hasBroadcastChannel a rdf:Property ;
    rdfs:label "hasBroadcastChannel" ;
    rdfs:comment "A broadcast channel of a broadcast service." ;
    schema:domainIncludes schema:BroadcastService ;
    schema:inverseOf schema:providesBroadcastService ;
    schema:rangeIncludes schema:BroadcastChannel ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1004> .

schema:hasDefinedTerm a rdf:Property ;
    rdfs:label "hasDefinedTerm" ;
    rdfs:comment "A Defined Term contained in this term set." ;
    schema:domainIncludes schema:DefinedTermSet ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTerm ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:hasMenu a rdf:Property ;
    rdfs:label "hasMenu" ;
    rdfs:comment "Either the actual menu as a structured representation, as text, or a URL of the menu." ;
    schema:domainIncludes schema:FoodEstablishment ;
    schema:rangeIncludes schema:Menu,
        schema:Text,
        schema:URL .

schema:hasVariant a rdf:Property ;
    rdfs:label "hasVariant" ;
    rdfs:comment "Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]])." ;
    schema:domainIncludes schema:ProductGroup ;
    schema:inverseOf schema:isVariantOf ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Product ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1797> .

schema:holdingArchive a rdf:Property ;
    rdfs:label "holdingArchive"@en ;
    rdfs:comment "[[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]]."@en ;
    schema:domainIncludes schema:ArchiveComponent ;
    schema:inverseOf schema:archiveHeld ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:ArchiveOrganization ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1758> .

schema:inDefinedTermSet a rdf:Property ;
    rdfs:label "inDefinedTermSet" ;
    rdfs:comment "A [[DefinedTermSet]] that contains this term." ;
    rdfs:subPropertyOf schema:isPartOf ;
    schema:domainIncludes schema:DefinedTerm ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:DefinedTermSet,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:inLanguage a rdf:Property ;
    rdfs:label "inLanguage" ;
    rdfs:comment "The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]." ;
    schema:domainIncludes schema:BroadcastService,
        schema:CommunicateAction,
        schema:CreativeWork,
        schema:Event,
        schema:LinkRole,
        schema:PronounceableText,
        schema:WriteAction ;
    schema:rangeIncludes schema:Language,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2382> .

schema:incentiveCompensation a rdf:Property ;
    rdfs:label "incentiveCompensation" ;
    rdfs:comment "Description of bonus and commission compensation aspects of the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:interactionStatistic a rdf:Property ;
    rdfs:label "interactionStatistic" ;
    rdfs:comment "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:InteractionCounter ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2421> .

schema:isAccessibleForFree a rdf:Property ;
    rdfs:label "isAccessibleForFree" ;
    rdfs:comment "A flag to signal that the item, event, or place is accessible for free." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:Place ;
    schema:rangeIncludes schema:Boolean .

schema:isBasedOn a rdf:Property ;
    rdfs:label "isBasedOn" ;
    rdfs:comment "A resource from which this work is derived or from which it is a modification or adaption." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Product,
        schema:URL .

schema:isVariantOf a rdf:Property ;
    rdfs:label "isVariantOf" ;
    rdfs:comment "Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group." ;
    schema:domainIncludes schema:Product,
        schema:ProductModel ;
    schema:inverseOf schema:hasVariant ;
    schema:rangeIncludes schema:ProductGroup,
        schema:ProductModel ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:itemOffered a rdf:Property ;
    rdfs:label "itemOffered" ;
    rdfs:comment "An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:inverseOf schema:offers ;
    schema:rangeIncludes schema:AggregateOffer,
        schema:CreativeWork,
        schema:Event,
        schema:MenuItem,
        schema:Product,
        schema:Service,
        schema:Trip .

schema:jobBenefits a rdf:Property ;
    rdfs:label "jobBenefits" ;
    rdfs:comment "Description of benefits associated with the job." ;
    schema:domainIncludes schema:JobPosting ;
    schema:rangeIncludes schema:Text .

schema:jurisdiction a rdf:Property ;
    rdfs:label "jurisdiction" ;
    rdfs:comment "Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based." ;
    schema:domainIncludes schema:GovernmentService,
        schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2534> .

schema:legislationApplies a rdf:Property ;
    rdfs:label "legislationApplies" ;
    rdfs:comment "Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href=\\"/legislationTransposes\\">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state \\"applies\\" the consolidated version of the European Directive implemented in it." ;
    ns2:equivalentProperty <http://data.europa.eu/eli/ontology#implements> ;
    ns1:exactMatch <http://data.europa.eu/eli/ontology#implements> ;
    schema:domainIncludes schema:Legislation ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Legislation ;
    schema:source <http://publications.europa.eu/mdr/eli/index.html>,
        <https://github.com/schemaorg/schemaorg/issues/1156> .

schema:mainContentOfPage a rdf:Property ;
    rdfs:label "mainContentOfPage" ;
    rdfs:comment "Indicates if this web page element is the main subject of the page." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:WebPageElement .

schema:mainEntity a rdf:Property ;
    rdfs:label "mainEntity" ;
    rdfs:comment "Indicates the primary entity described in some page or other CreativeWork." ;
    rdfs:subPropertyOf schema:about ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:mainEntityOfPage ;
    schema:rangeIncludes schema:Thing .

schema:mainEntityOfPage a rdf:Property ;
    rdfs:label "mainEntityOfPage" ;
    rdfs:comment "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details." ;
    schema:domainIncludes schema:Thing ;
    schema:inverseOf schema:mainEntity ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL .

schema:makesOffer a rdf:Property ;
    rdfs:label "makesOffer" ;
    rdfs:comment "A pointer to products or services offered by the organization or person." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:inverseOf schema:offeredBy ;
    schema:rangeIncludes schema:Offer ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:offeredBy a rdf:Property ;
    rdfs:label "offeredBy" ;
    rdfs:comment "A pointer to the organization or person making the offer." ;
    schema:domainIncludes schema:Offer ;
    schema:inverseOf schema:makesOffer ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:offers a rdf:Property ;
    rdfs:label "offers" ;
    rdfs:comment """An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      """ ;
    schema:domainIncludes schema:AggregateOffer,
        schema:CreativeWork,
        schema:EducationalOccupationalProgram,
        schema:Event,
        schema:MenuItem,
        schema:Product,
        schema:Service,
        schema:Trip ;
    schema:inverseOf schema:itemOffered ;
    schema:rangeIncludes schema:Demand,
        schema:Offer ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:parent a rdf:Property ;
    rdfs:label "parent" ;
    rdfs:comment "A parent of this person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:partOfSeries a rdf:Property ;
    rdfs:label "partOfSeries" ;
    rdfs:comment "The series to which this episode or season belongs." ;
    rdfs:subPropertyOf schema:isPartOf ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode ;
    schema:rangeIncludes schema:CreativeWorkSeries .

schema:partOfTrip a rdf:Property ;
    rdfs:label "partOfTrip" ;
    rdfs:comment "Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip." ;
    schema:domainIncludes schema:Trip ;
    schema:inverseOf schema:subTrip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Trip ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:paymentDueDate a rdf:Property ;
    rdfs:label "paymentDueDate" ;
    rdfs:comment "The date that payment is due." ;
    schema:domainIncludes schema:Invoice,
        schema:Order ;
    schema:rangeIncludes schema:Date,
        schema:DateTime .

schema:performTime a rdf:Property ;
    rdfs:label "performTime" ;
    rdfs:comment "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)." ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:Duration .

schema:performer a rdf:Property ;
    rdfs:label "performer" ;
    rdfs:comment "A performer at the event&#x2014;for example, a presenter, musician, musical group or actor." ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:photo a rdf:Property ;
    rdfs:label "photo" ;
    rdfs:comment "A photograph of this place." ;
    rdfs:subPropertyOf schema:image ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:ImageObject,
        schema:Photograph .

schema:provider a rdf:Property ;
    rdfs:label "provider" ;
    rdfs:comment "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller." ;
    schema:domainIncludes schema:CreativeWork,
        schema:EducationalOccupationalProgram,
        schema:Invoice,
        schema:ParcelDelivery,
        schema:Reservation,
        schema:Service,
        schema:Trip ;
    schema:rangeIncludes schema:Organization,
        schema:Person ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2289> .

schema:providesBroadcastService a rdf:Property ;
    rdfs:label "providesBroadcastService" ;
    rdfs:comment "The BroadcastService offered on this channel." ;
    schema:domainIncludes schema:BroadcastChannel ;
    schema:inverseOf schema:hasBroadcastChannel ;
    schema:rangeIncludes schema:BroadcastService .

schema:recipeIngredient a rdf:Property ;
    rdfs:label "recipeIngredient" ;
    rdfs:comment "A single ingredient used in the recipe, e.g. sugar, flour or garlic." ;
    rdfs:subPropertyOf schema:supply ;
    schema:domainIncludes schema:Recipe ;
    schema:rangeIncludes schema:Text .

schema:recordedAs a rdf:Property ;
    rdfs:label "recordedAs" ;
    rdfs:comment "An audio recording of the work." ;
    schema:domainIncludes schema:MusicComposition ;
    schema:inverseOf schema:recordingOf ;
    schema:rangeIncludes schema:MusicRecording ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:recordedAt a rdf:Property ;
    rdfs:label "recordedAt" ;
    rdfs:comment "The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:recordedIn ;
    schema:rangeIncludes schema:Event .

schema:recordedIn a rdf:Property ;
    rdfs:label "recordedIn" ;
    rdfs:comment "The CreativeWork that captured all or part of this Event." ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:recordedAt ;
    schema:rangeIncludes schema:CreativeWork .

schema:recordingOf a rdf:Property ;
    rdfs:label "recordingOf" ;
    rdfs:comment "The composition this track is a recording of." ;
    schema:domainIncludes schema:MusicRecording ;
    schema:inverseOf schema:recordedAs ;
    schema:rangeIncludes schema:MusicComposition ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:releaseOf a rdf:Property ;
    rdfs:label "releaseOf" ;
    rdfs:comment "The album this is a release of." ;
    schema:domainIncludes schema:MusicRelease ;
    schema:inverseOf schema:albumRelease ;
    schema:rangeIncludes schema:MusicAlbum ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:review a rdf:Property ;
    rdfs:label "review" ;
    rdfs:comment "A review of the item." ;
    schema:domainIncludes schema:Brand,
        schema:CreativeWork,
        schema:Event,
        schema:Offer,
        schema:Organization,
        schema:Place,
        schema:Product,
        schema:Service ;
    schema:rangeIncludes schema:Review .

schema:roleName a rdf:Property ;
    rdfs:label "roleName" ;
    rdfs:comment "A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'." ;
    schema:domainIncludes schema:Role ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:runtimePlatform a rdf:Property ;
    rdfs:label "runtimePlatform" ;
    rdfs:comment "Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0)." ;
    schema:domainIncludes schema:SoftwareSourceCode ;
    schema:rangeIncludes schema:Text .

schema:season a rdf:Property ;
    rdfs:label "season" ;
    rdfs:comment "A season in a media series." ;
    rdfs:subPropertyOf schema:hasPart ;
    schema:domainIncludes schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGameSeries ;
    schema:rangeIncludes schema:CreativeWorkSeason,
        schema:URL ;
    schema:supersededBy schema:containsSeason .

schema:serialNumber a rdf:Property ;
    rdfs:label "serialNumber" ;
    rdfs:comment "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer." ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:IndividualProduct,
        schema:Offer ;
    schema:rangeIncludes schema:Text ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:serviceArea a rdf:Property ;
    rdfs:label "serviceArea" ;
    rdfs:comment "The geographic area where the service is provided." ;
    schema:domainIncludes schema:ContactPoint,
        schema:Organization,
        schema:Service ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:GeoShape,
        schema:Place ;
    schema:supersededBy schema:areaServed .

schema:serviceOutput a rdf:Property ;
    rdfs:label "serviceOutput" ;
    rdfs:comment "The tangible thing generated by the service, e.g. a passport, permit, etc." ;
    schema:domainIncludes schema:Service ;
    schema:rangeIncludes schema:Thing .

schema:sibling a rdf:Property ;
    rdfs:label "sibling" ;
    rdfs:comment "A sibling of the person." ;
    schema:domainIncludes schema:Person ;
    schema:rangeIncludes schema:Person .

schema:significantLink a rdf:Property ;
    rdfs:label "significantLink" ;
    rdfs:comment "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most." ;
    schema:domainIncludes schema:WebPage ;
    schema:rangeIncludes schema:URL .

schema:softwareRequirements a rdf:Property ;
    rdfs:label "softwareRequirements" ;
    rdfs:comment "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime)." ;
    schema:domainIncludes schema:SoftwareApplication ;
    schema:rangeIncludes schema:Text,
        schema:URL .

schema:sponsor a rdf:Property ;
    rdfs:label "sponsor" ;
    rdfs:comment "A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Event,
        schema:Grant,
        schema:MedicalStudy,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:subOrganization a rdf:Property ;
    rdfs:label "subOrganization" ;
    rdfs:comment "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property." ;
    schema:domainIncludes schema:Organization ;
    schema:inverseOf schema:parentOrganization ;
    schema:rangeIncludes schema:Organization .

schema:subTrip a rdf:Property ;
    rdfs:label "subTrip" ;
    rdfs:comment "Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip." ;
    schema:domainIncludes schema:Trip ;
    schema:inverseOf schema:partOfTrip ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Trip ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism>,
        <https://github.com/schemaorg/schemaorg/issues/1810> .

schema:subjectOf a rdf:Property ;
    rdfs:label "subjectOf" ;
    rdfs:comment "A CreativeWork or Event about this Thing." ;
    schema:domainIncludes schema:Thing ;
    schema:inverseOf schema:about ;
    schema:rangeIncludes schema:CreativeWork,
        schema:Event ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1670> .

schema:suggestedAnswer a rdf:Property ;
    rdfs:label "suggestedAnswer" ;
    rdfs:comment "An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site." ;
    schema:domainIncludes schema:Question ;
    schema:rangeIncludes schema:Answer,
        schema:ItemList .

schema:superEvent a rdf:Property ;
    rdfs:label "superEvent" ;
    rdfs:comment "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent." ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:subEvent ;
    schema:rangeIncludes schema:Event .

schema:targetCollection a rdf:Property ;
    rdfs:label "targetCollection" ;
    rdfs:comment "A sub property of object. The collection target of the action." ;
    rdfs:subPropertyOf schema:object ;
    schema:domainIncludes schema:UpdateAction ;
    schema:rangeIncludes schema:Thing .

schema:temporalCoverage a rdf:Property ;
    rdfs:label "temporalCoverage" ;
    rdfs:comment """The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".

Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.""" ;
    ns2:equivalentProperty <http://purl.org/dc/terms/temporal> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:DateTime,
        schema:Text,
        schema:URL .

schema:termCode a rdf:Property ;
    rdfs:label "termCode" ;
    rdfs:comment "A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]]" ;
    schema:domainIncludes schema:DefinedTerm ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/894> .

schema:track a rdf:Property ;
    rdfs:label "track" ;
    rdfs:comment "A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording." ;
    schema:domainIncludes schema:MusicGroup,
        schema:MusicPlaylist ;
    schema:rangeIncludes schema:ItemList,
        schema:MusicRecording ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ> .

schema:translationOfWork a rdf:Property ;
    rdfs:label "translationOfWork" ;
    rdfs:comment "The work that this work has been translated from. e.g. ç‰©ç§èµ·æº is a translationOf â€œOn the Origin of Speciesâ€" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:workTranslation ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:CreativeWork .

schema:usageInfo a rdf:Property ;
    rdfs:label "usageInfo" ;
    rdfs:comment """The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.""" ;
    schema:domainIncludes schema:CreativeWork ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2454> .

schema:warranty a rdf:Property ;
    rdfs:label "warranty" ;
    rdfs:comment "The warranty promise(s) included in the offer." ;
    schema:domainIncludes schema:Demand,
        schema:Offer ;
    schema:rangeIncludes schema:WarrantyPromise ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> .

schema:workTranslation a rdf:Property ;
    rdfs:label "workTranslation" ;
    rdfs:comment "A work that is a translation of the content of this work. e.g. è¥¿éŠè¨˜ has an English workTranslation â€œJourney to the Westâ€,a German workTranslation â€œMonkeys Pilgerfahrtâ€ and a Vietnamese  translation TÃ¢y du kÃ½ bÃ¬nh kháº£o." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:translationOfWork ;
    schema:isPartOf <https://bib.schema.org> ;
    schema:rangeIncludes schema:CreativeWork .

schema:yield a rdf:Property ;
    rdfs:label "yield" ;
    rdfs:comment "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles." ;
    schema:domainIncludes schema:HowTo ;
    schema:rangeIncludes schema:QuantitativeValue,
        schema:Text .

schema:about a rdf:Property ;
    rdfs:label "about" ;
    rdfs:comment "The subject matter of the content." ;
    schema:domainIncludes schema:CommunicateAction,
        schema:CreativeWork,
        schema:Event ;
    schema:inverseOf schema:subjectOf ;
    schema:rangeIncludes schema:Thing ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/1670> .

schema:actor a rdf:Property ;
    rdfs:label "actor" ;
    rdfs:comment "An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip." ;
    schema:domainIncludes schema:Clip,
        schema:CreativeWorkSeason,
        schema:Episode,
        schema:Event,
        schema:Movie,
        schema:MovieSeries,
        schema:RadioSeries,
        schema:TVSeries,
        schema:VideoGame,
        schema:VideoGameSeries,
        schema:VideoObject ;
    schema:rangeIncludes schema:Person .

schema:competitor a rdf:Property ;
    rdfs:label "competitor" ;
    rdfs:comment "A competitor in a sports event." ;
    schema:domainIncludes schema:SportsEvent ;
    schema:rangeIncludes schema:Person,
        schema:SportsTeam .

schema:containedInPlace a rdf:Property ;
    rdfs:label "containedInPlace" ;
    rdfs:comment "The basic containment relation between a place and one that contains it." ;
    schema:domainIncludes schema:Place ;
    schema:inverseOf schema:containsPlace ;
    schema:rangeIncludes schema:Place .

schema:encoding a rdf:Property ;
    rdfs:label "encoding" ;
    rdfs:comment "A media object that encodes this CreativeWork. This property is a synonym for associatedMedia." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:encodesCreativeWork ;
    schema:rangeIncludes schema:MediaObject .

schema:hasMap a rdf:Property ;
    rdfs:label "hasMap" ;
    rdfs:comment "A URL to a map of the place." ;
    schema:domainIncludes schema:Place ;
    schema:rangeIncludes schema:Map,
        schema:URL .

schema:material a rdf:Property ;
    rdfs:label "material" ;
    rdfs:comment "A material that something is made from, e.g. leather, wool, cotton, paper." ;
    schema:domainIncludes schema:CreativeWork,
        schema:Product ;
    schema:rangeIncludes schema:Product,
        schema:Text,
        schema:URL .

schema:memberOf a rdf:Property ;
    rdfs:label "memberOf" ;
    rdfs:comment "An Organization (or ProgramMembership) to which this Person or Organization belongs." ;
    schema:domainIncludes schema:Organization,
        schema:Person ;
    schema:inverseOf schema:member ;
    schema:rangeIncludes schema:Organization,
        schema:ProgramMembership .

schema:parentOrganization a rdf:Property ;
    rdfs:label "parentOrganization" ;
    rdfs:comment "The larger organization that this organization is a [[subOrganization]] of, if any." ;
    schema:domainIncludes schema:Organization ;
    schema:inverseOf schema:subOrganization ;
    schema:rangeIncludes schema:Organization .

schema:result a rdf:Property ;
    rdfs:label "result" ;
    rdfs:comment "The result produced in the action. e.g. John wrote *a book*." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing .

schema:seller a rdf:Property ;
    rdfs:label "seller" ;
    rdfs:comment "An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:BuyAction,
        schema:Demand,
        schema:Flight,
        schema:Offer,
        schema:Order ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:spatialCoverage a rdf:Property ;
    rdfs:label "spatialCoverage" ;
    rdfs:comment """The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.""" ;
    rdfs:subPropertyOf schema:contentLocation ;
    ns2:equivalentProperty <http://purl.org/dc/terms/spatial> ;
    schema:domainIncludes schema:CreativeWork ;
    schema:rangeIncludes schema:Place .

schema:step a rdf:Property ;
    rdfs:label "step" ;
    rdfs:comment "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection." ;
    schema:domainIncludes schema:HowTo ;
    schema:rangeIncludes schema:CreativeWork,
        schema:HowToSection,
        schema:HowToStep,
        schema:Text .

schema:subEvent a rdf:Property ;
    rdfs:label "subEvent" ;
    rdfs:comment "An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference." ;
    schema:domainIncludes schema:Event ;
    schema:inverseOf schema:superEvent ;
    schema:rangeIncludes schema:Event .

schema:supply a rdf:Property ;
    rdfs:label "supply" ;
    rdfs:comment "A sub-property of instrument. A supply consumed when performing instructions or a direction." ;
    rdfs:subPropertyOf schema:instrument ;
    schema:domainIncludes schema:HowTo,
        schema:HowToDirection ;
    schema:rangeIncludes schema:HowToSupply,
        schema:Text .

schema:workFeatured a rdf:Property ;
    rdfs:label "workFeatured" ;
    rdfs:comment """A work featured in some event, e.g. exhibited in an ExhibitionEvent.
       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).""" ;
    schema:domainIncludes schema:Event ;
    schema:rangeIncludes schema:CreativeWork .

schema:areaServed a rdf:Property ;
    rdfs:label "areaServed" ;
    rdfs:comment "The geographic area where a service or offered item is provided." ;
    schema:domainIncludes schema:ContactPoint,
        schema:DeliveryChargeSpecification,
        schema:Demand,
        schema:Offer,
        schema:Organization,
        schema:Service ;
    schema:rangeIncludes schema:AdministrativeArea,
        schema:GeoShape,
        schema:Place,
        schema:Text .

schema:image a rdf:Property ;
    rdfs:label "image" ;
    rdfs:comment "An image of the item. This can be a [[URL]] or a fully described [[ImageObject]]." ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:ImageObject,
        schema:URL .

schema:includedInDataCatalog a rdf:Property ;
    rdfs:label "includedInDataCatalog" ;
    rdfs:comment "A data catalog which contains this dataset." ;
    schema:domainIncludes schema:Dataset ;
    schema:inverseOf schema:dataset ;
    schema:rangeIncludes schema:DataCatalog .

schema:member a rdf:Property ;
    rdfs:label "member" ;
    rdfs:comment "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals." ;
    schema:domainIncludes schema:Organization,
        schema:ProgramMembership ;
    schema:inverseOf schema:memberOf ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:recipient a rdf:Property ;
    rdfs:label "recipient" ;
    rdfs:comment "A sub property of participant. The participant who is at the receiving end of the action." ;
    rdfs:subPropertyOf schema:participant ;
    schema:domainIncludes schema:AuthorizeAction,
        schema:CommunicateAction,
        schema:DonateAction,
        schema:GiveAction,
        schema:Message,
        schema:PayAction,
        schema:ReturnAction,
        schema:SendAction,
        schema:TipAction ;
    schema:rangeIncludes schema:Audience,
        schema:ContactPoint,
        schema:Organization,
        schema:Person .

schema:workExample a rdf:Property ;
    rdfs:label "workExample" ;
    rdfs:comment "Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:exampleOfWork ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:gtin a rdf:Property ;
    rdfs:label "gtin" ;
    rdfs:comment """A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
   """ ;
    rdfs:subPropertyOf schema:identifier ;
    schema:domainIncludes schema:Demand,
        schema:Offer,
        schema:Product ;
    schema:isPartOf <https://pending.schema.org> ;
    schema:rangeIncludes schema:Text ;
    schema:source <https://github.com/schemaorg/schemaorg/issues/2288> .

schema:hasPart a rdf:Property ;
    rdfs:label "hasPart" ;
    rdfs:comment "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense)." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:isPartOf ;
    schema:rangeIncludes schema:CreativeWork ;
    schema:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex> .

schema:position a rdf:Property ;
    rdfs:label "position" ;
    rdfs:comment "The position of an item in a series or sequence of items." ;
    schema:domainIncludes schema:CreativeWork,
        schema:ListItem ;
    schema:rangeIncludes schema:Integer,
        schema:Text .

schema:isPartOf a rdf:Property ;
    rdfs:label "isPartOf" ;
    rdfs:comment "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of." ;
    schema:domainIncludes schema:CreativeWork ;
    schema:inverseOf schema:hasPart ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL .

schema:instrument a rdf:Property ;
    rdfs:label "instrument" ;
    rdfs:comment "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing .

schema:object a rdf:Property ;
    rdfs:label "object" ;
    rdfs:comment "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Thing .

schema:publishingPrinciples a rdf:Property ;
    rdfs:label "publishingPrinciples" ;
    rdfs:comment """The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
""" ;
    schema:domainIncludes schema:CreativeWork,
        schema:Organization,
        schema:Person ;
    schema:rangeIncludes schema:CreativeWork,
        schema:URL .

schema:location a rdf:Property ;
    rdfs:label "location" ;
    rdfs:comment "The location of, for example, where an event is happening, where an organization is located, or where an action takes place." ;
    schema:domainIncludes schema:Action,
        schema:Event,
        schema:Organization ;
    schema:rangeIncludes schema:Place,
        schema:PostalAddress,
        schema:Text,
        schema:VirtualLocation .

schema:participant a rdf:Property ;
    rdfs:label "participant" ;
    rdfs:comment "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*." ;
    schema:domainIncludes schema:Action ;
    schema:rangeIncludes schema:Organization,
        schema:Person .

schema:identifier a rdf:Property ;
    rdfs:label "identifier" ;
    rdfs:comment """The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        """ ;
    ns2:equivalentProperty <http://purl.org/dc/terms/identifier> ;
    schema:domainIncludes schema:Thing ;
    schema:rangeIncludes schema:PropertyValue,
        schema:Text,
        schema:URL .
`;

export default schemaOrgTurtleFileString;
